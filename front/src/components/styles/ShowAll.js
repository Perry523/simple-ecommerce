import styled from "styled-components";

export const Row = styled.div`
    display: flex;
    justify-content: center;
`
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 170px;
    max-width: 300px;
    margin: 30px 15px;
    @media(max-width: 768px){
        width: 30%;
    }
    @media(max-width: 550px){
        width: 40%;
    }
    a{
    img{
        width:100%;
        height: 200px;
    }
    }
    h3{
        text-align:center;
        padding: 10px 0px;
    }
    p{
        text-align:center;
    }
    div{
        justify-content: space-around;
        h2:first-child{
            color: green;
        }
        h2:last-child{
            color: red;
            text-decoration: line-through;
            text-decoration-color: black;
        }
    }

`