import styled from "styled-components";

const StyledProduct = styled.li`

    border: 2px solid var(--grey);
    border-radius: var(--radius-2);

    min-width: 200px;

    padding: 0 20px 20px 20px;

    display: flex;
    flex-direction: column;
    gap: 10px;

figure{
    width: 70%;
    height: 100px;

    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;  
}

figure img{
    object-fit: cover;

    width: 100%;
    height: 100%;
}

h2{
    font-size: var(--rem-12);
    
    height: 45px;
    max-width: 150px;
}

p{
    font-size: var(--rem-08);
    color: var(--grey-2);
}

span{
    color: var(--color-primary);
    font-size: var(--rem-09);
    font-weight: 600;
}

button{
    width: 90px;
    height: 35px;

    cursor: pointer;

    border-radius: var(--radius-2);
    border: none;

    background-color: var(--color-primary);
    color: var(--white);
}

`

export {StyledProduct}