import { StyledProduct } from "./StyledProduct"

function Product ({setCart, cart, element}){

    function Shopping (element){

        if(!cart.includes(element)){
            setCart([...cart, element])
        }
        
    }
        return  <StyledProduct>
                    <figure>
                         <img src={element.img} alt={element.name} />
                    </figure>
                    <h2>{element.name}</h2>
                    <p>{element.category}</p>
                    <span>{element.price.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                     })}</span>
                    <button onClick={() => Shopping(element)}>Adicionar</button>
                </StyledProduct>       
}

export {Product}