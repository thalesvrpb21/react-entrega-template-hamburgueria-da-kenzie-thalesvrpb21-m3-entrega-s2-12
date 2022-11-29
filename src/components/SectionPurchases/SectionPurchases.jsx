import { BoxBuy } from "../BoxBuy/BoxBuy"
import { ProductsCart } from "../ProductsCart/ProductsCart"
import { TotalPrice } from "../TotalPrice/TotalPrice"
import { StyledSectionPurchases } from "./StyledSectionPurchases"

function SectionPurchases ({cart, setCart}) {

    function totalValue () {

        const value = cart.reduce((initialValue, currentValue) =>{
            
            return  initialValue + currentValue.price
        }, 0)
        
        return value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
        })    
    }

        <div className="boxBuy">
            <p>Carrinho de compras</p>
        </div>
 
    if(cart.length){

        return  <StyledSectionPurchases>

                    <BoxBuy />
                    <ul>
                        <ProductsCart cart={cart} setCart={setCart} />  
                    </ul>

                    <TotalPrice totalValue={totalValue} setCart={setCart} />

                </StyledSectionPurchases>
    }
    else{
        return  <StyledSectionPurchases>
                    <BoxBuy />
                    <div className="boxEmpty">
                        <h3>Sua sacola está vazia</h3>
                        <p>Adicione itens</p>
                    </div>    
                </StyledSectionPurchases>  
    }     
}

export {SectionPurchases}