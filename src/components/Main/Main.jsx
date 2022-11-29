import { useState } from "react"
import { StyledProductList } from "../ProductList/StyledProductList"
import { Product } from "../Product/Product"
import { SectionPurchases } from "../SectionPurchases/SectionPurchases"
import { StyledMain } from "./StyledMain"


function Main ({filtredData}) {

    

    const [cart, setCart] = useState([])

    

    return (
        <StyledMain>
            
            <StyledProductList>
                {
                    filtredData.map(element => {
                        return <Product element={element} setCart={setCart} cart={cart} key={element.id} />
                    })   
                }   
            </StyledProductList>

            <SectionPurchases cart={cart} setCart={setCart}  />
   
        </StyledMain>
    )

}

export {Main}