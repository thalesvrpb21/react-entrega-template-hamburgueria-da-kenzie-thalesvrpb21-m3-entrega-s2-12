import { useEffect, useState } from "react"
import { api } from "../../services/api.js"
import {StyledHeader} from "./StyledHeader.js"

function Header ({data, setFiltredData}){

    const [inputValue, setInputValue] = useState("")
    

    useEffect( () =>{

        async function SearchInApi(){

            try{

                const response = await api.get("products")
                setFiltredData(response.data)

            }catch (error){

            }
        }

        SearchInApi()

    }, [])
    

    function searchProduct (){
        
        const search = inputValue.toLowerCase().trim()

        const result = data.filter(element => {
            return element.name.toLowerCase().includes(search) || element.category.toLowerCase().includes(search)
        })

       
            
        setFiltredData(result)
        
    }
    

    return (
        <StyledHeader>
            <h1>Burguer <strong>Kenzie</strong> </h1>
            <div>
                <input type="search" placeholder="Digitar Pesquisa" onChange={(event) => 
                    setInputValue(event.target.value)} />
                <button onClick={() => searchProduct()}>Pesquisar</button>
            </div>
        </StyledHeader>
    )
}

export {Header}