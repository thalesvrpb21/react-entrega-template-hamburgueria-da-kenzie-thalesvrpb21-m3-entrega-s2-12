import styled from "styled-components";

const StyledDiv = styled.div`

    background-color: var(--color-primary);
    color: var(--white);

    border-radius: 4px 4px 0 0;

    height: 40px;

    display: flex;
    align-items: center;

    padding: 0 20px;

    width: 280px;

    @media(width > 400px) {
        width: 340px;
    }
    
`

export {StyledDiv}