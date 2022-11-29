import styled from "styled-components";

const StyledSectionPurchases = styled.section`
    

    max-width: 700px;

    padding: 20px;

    

    .boxEmpty{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;

        height: 150px;

        max-width: 400px;
    }

    .boxEmpty p{
        font-size: var(--rem-09);

        color: var(--grey-2);
    }

    ul{
        border-bottom: 2px solid var(--grey);

        display: flex;
        flex-direction: column;
        gap: 10px;

        padding: 20px;

        max-width: 350px;
        
    }

    @media(width > 800px){
        padding: 0;
    }

    @media(width > 1200px){
        padding: 0;

        margin-left: 100px;
    }
`

export {StyledSectionPurchases}