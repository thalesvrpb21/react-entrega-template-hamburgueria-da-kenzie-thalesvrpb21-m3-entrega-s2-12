import { StyledTotalPrice } from "./Styled"

function TotalPrice ({totalValue, setCart}){
    return (
        <StyledTotalPrice>
            <div>
                <p>Total</p>
                <span>{totalValue()}</span>
            </div>
            <button onClick={() => setCart([])}>Remover Todos</button>
        </StyledTotalPrice>
    )
}

export {TotalPrice}