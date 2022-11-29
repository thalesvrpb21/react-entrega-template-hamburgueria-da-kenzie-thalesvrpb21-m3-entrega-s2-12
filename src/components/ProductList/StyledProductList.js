import styled from "styled-components"


const StyledProductList = styled.ul`
    display: flex;
    gap: 15px;
    
    overflow-x: auto;

    padding: 0 20px;

    width: 100%;

    max-width: 700px;

    @media(width > 1000px) {
        flex-wrap: wrap;
        
    }
    
`

export {StyledProductList}