import {createGlobalStyle} from "styled-components";



const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    ul{
        list-style: none;
    }

    body{
        font-family: 'Inter', sans-serif;
    }

    :root{
        --color-primary: #27AE60;
        --grey: #E0E0E0;
        --grey-2: #B0ACAE;
        --grey-text: #EB5757;  
        --white: #fff;
        

        --radius-1: 4px;
        --radius-2: 6px;
        --radius-3: 8px;

        --rem-08: 0.8rem;
        --rem-09: 0.9rem;
        --rem-10: 1rem;
        --rem-12: 1.2rem;
        --rem-14: 1.4rem;
    }
`
export {Global}
