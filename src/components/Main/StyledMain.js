import styled from "styled-components";

const StyledMain = styled.main`

display: flex;
flex-direction: column;

@media(width > 700px){
    flex-direction: row;
}

@media(width > 1000px){
    padding: 0 100px;
}

`

export {StyledMain}