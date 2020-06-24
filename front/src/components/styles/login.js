import styled from 'styled-components'

export const Row = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    
`

export const Case = styled.div`
    display: flex;
    align-items: center;
    flex-direction:column;
    justify-content: center;
    height: 100%;
    
    img{
        width: 180px;
        height: 180px;
    }

    form{
        margin-top: 10px;
        width: 100%;
        padding: 0px 10px;
        max-width: 470px;
        min-width: 250px;
        display: flex;
        flex-direction: column;
        align-self: center;
        margin-bottom:25px;

    div{
        align-self: center;
        margin: 5px;
    }
    h3{
        text-align: center;
        color: red;
        margin-bottom: 10px;
    }
    p{
        font-size: 17px;
        margin-bottom: 15px;

    }
    a{
        text-decoration: none;
        align-self: center;
    }
    input{
        border: 0px;
        box-shadow: 0px 0px 2px 0px;
        flex:1;
        margin: 10px;
        border-radius: 7px;
        padding: 10px;
        height: 40px;
    }
    button{
        font-size: 17px;
        color: white;
        margin-top: 10px;
        height: 40px;
        border-radius: 5px;
        background-color: blue;
        border: 0px;
    }
    }    
    `

export const Box = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

`