import styled from "styled-components";

const StyledHeader = styled.header`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;

    padding: 20px;

    h1{
        font-size: var(--rem-14);
    }

    strong{
        color: var(--grey-text);
        font-size: var(--rem-09);
    }

    div{
        width: 100%;
        height: 50px;

        max-width: 340px;
    }

    div input{
        width: 100%;
        height: 100%;

        border: 2px solid var(--grey);
        border-radius: var(--radius-3);

        padding: 0 15px;
    }

    div input::placeholder{
        color: var(--grey);
    }

    div button{
        margin-left: -100px;

        padding: 8px 15px;

        border: none;
        border-radius: var(--radius-2);

        background-color: var(--color-primary);
        color: var(--white);

        cursor: pointer;
    }

    @media(width > 700px){

        flex-direction: row;
        justify-content: space-between;

        padding: 20px 100px;
    }
`

export {StyledHeader}

