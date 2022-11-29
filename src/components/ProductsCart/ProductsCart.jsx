import { StyledLiProductsCart } from "./Styled"

function ProductsCart ({cart, setCart}) {

    function removeItem (element) {
        const removeItemInCart = cart.filter((product) => product.id !== element.id)
        setCart(removeItemInCart)
        
    }

    return (
        <>
            {
                cart.map(element => (
                    <StyledLiProductsCart key={element.id}>
                            <div className="box-card">
                                <figure>
                                    <img src={element.img} alt={element.name} />
                                </figure>
                                <div className="boxInfo">
                                    <h3>{element.name}</h3>
                                    <p>{element.category}</p>
                                </div>
                            </div>
                            <button onClick={() => removeItem(element) }>Remover</button>
                    </StyledLiProductsCart>
            ))}
            
        </>
    )
}

export {ProductsCart}