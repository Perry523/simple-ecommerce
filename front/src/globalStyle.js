import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box

    }
    html, body, #root{
        height: 100%;
        background: linear-gradient(to right, #b993d6, #8ca6db); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    }
    button{
        cursor: pointer
    }
    label{
        font-size: 17px;
        align-self: center;
        text-align: center;
        font-family:Arial, Helvetica, sans-serif;
        color: black;
        font-weight: 500;
    }
`