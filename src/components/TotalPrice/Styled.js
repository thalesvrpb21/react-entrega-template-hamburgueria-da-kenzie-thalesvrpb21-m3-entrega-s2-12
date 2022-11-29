import styled from "styled-components";


const StyledTotalPrice = styled.div`

div{
    display: flex;
    justify-content: space-between;

    padding: 10px;

    max-width: 350px;
}

button{
    cursor: pointer;

    height: 50px;
    width: 97%;
    max-width: 350px;

    border-radius: var(--radius-2);
    border: none;

    background-color: var(--grey);

    margin-top: 15px;

    font-weight: 600;

}

button:hover{
    background-color: var(--grey-text);
    opacity: 0.6;

    color: var(--white);

    
}

`

export {StyledTotalPrice}