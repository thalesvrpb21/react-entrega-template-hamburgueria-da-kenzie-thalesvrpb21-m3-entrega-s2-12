import styled from "styled-components";

const StyledLiProductsCart = styled.li`

display: flex;
justify-content: space-between;

max-width: 300px;

figure{
    background-color: var(--grey);

    display: flex;
    align-items: center;
    justify-content: center;

    width: 50px;
    height: 50px;

    border-radius: var(--radius-2);
}

figure img{
    object-fit: cover;

    width: 90%;
    height: 90%;
}

.box-card{
    display: flex;
    gap: 10px;
}

.boxInfo{
    margin-top: 5px;

    display: flex;
    flex-direction: column;
    gap: 5px;
}

h3{
    font-size: var(--rem-09);
}

p{
    font-size: var(--rem-08);

    color: var(--grey);
}

button{
    cursor: pointer;

    border: none;

    background-color: transparent;

    color: var(--grey);

    height: 40px;
    width: 70px;
}




`

export {StyledLiProductsCart}