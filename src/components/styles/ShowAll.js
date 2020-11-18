import styled from "styled-components";

export const SideBar = styled.div`
    
    @media(max-width:600px){
        display: none;
    }
    margin-top: -21px;
    top: 0;
    height: 0%;
    width: 18%;
    position: sticky;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    label{
        font-size: 14px;
        font-weight: bolder;
        margin: 10px 0px;
    }
    span{
        font-family: 'Kanit', sans-serif;
        font-size: 14px;
        width: 100%;
        text-align: center;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        padding: 5px 0px;
    }
    span:hover{
        background-color: #eee;
        cursor: pointer;
    }
    span:active{
        background-color: #ddd;

    }
` 
export const Row = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 20px;
    h4{
        margin-right: 10px;
    }
    input{
        width: 100px;
        margin-right: 10px;
        border: 0px;
        border-radius: 3px;
        height: 25px;
        padding: 5px;
    }
    select{
        width: 100px;
    }
    button{
        margin-left: auto;
        padding: 5px;
        border-radius: 3px;
        border: 0;
        background: orangered;
        color: white;
    }

`
export const Grid = styled.div`
    display: grid;
    grid-gap: 15px;
    @media(min-width:600px){
        grid-template-columns: repeat(2,1fr)
    }
    @media(min-width:880px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media(min-width:1300px){
        grid-template-columns: repeat(4, 1fr);
    }
    @media(min-width:1600px){
        grid-template-columns: repeat(5, 1fr);
    }
    @media (max-width:600px) {
        grid-gap: 0px;
        grid-template-columns: repeat(1,1fr);
    }

    `
export const Products = styled.div`
    height: 100%;
    display: flex;
    flex: 1;    
    flex-direction: column;
    margin: 0px 20px;
    width: 100%;
        
    @media(max-width:600px){
        margin: 0px;
    }
    `
export const Page = styled.div`
display: flex;
    `
export const Filter = styled.div`
    display: flex;
    padding-left: 10px;
    h4{
        
    }
    `
export const Card = styled.div`
    border-radius: 5px 5px 2px 2px;
    background: white;
    display: flex;
    font-size: 14px;
    overflow: hidden;
    @media(max-width:600px){
        width: 100%;
        flex:1;
        flex-direction: row;
        img{
            height: 170px;
            width: 180px;
            padding: 10px 25px;
            border-radius: 10px;
        }
        div{
            border-radius: 5px;
            flex:1 ;
            padding: 5px 0px;
            display: flex;
            flex-direction: column;
            margin: 7px 0px;
            justify-content: space-between;
            p{
                font-size: 20px;
            }
            h2{
                font-weight: 24px;
                padding-bottom: 20px;
            }
        }
        margin-bottom: 3px;
    }
    @media(min-width:600px){

    flex-direction: column;
    a{
        img{
        width: 100%;
        height: 230px;
        border-radius: 5px 5px 2px 2px;
    }
    }
    p{
        text-align:center;
        padding: 3px 10px;
        font-family: 'Kanit', sans-serif;
        padding-bottom: 5px;
        white-space: nowrap
    }
    div{
        justify-content: space-around;
    }
    h2{
        padding-bottom: 10px;
        padding-left: 10px;
    }
    }

`