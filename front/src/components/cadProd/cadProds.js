import styled from "styled-components";

export const Inputs = styled.form`
        

        height: 100%;
` 
export const Box = styled.div`
    flex-grow:1;
    display: flex;
    flex-direction: column;
    textarea{
        border-top: 1px solid gray;
        padding-top: 30px;
        margin-top: 30px;
        width: 80%;
        border-radius:10px;
        height: 100px;
        align-self: center;
    }
`
export const Row = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    @media(max-width: 550px){
        flex-direction: column
    }

`
export const Row2 = styled.div`
display: flex;
justify-content: center;
    img{
        border-radius: 10px;
        cursor: pointer;
    }
    #upload{
        display: none;
    }
        input{
            border: 0px;
            box-shadow: 0px 0px 3px 0px;
            flex:1;
            border-radius: 7px;
            max-width: 300px;
            padding: 10px;
            margin: 10px 0px;
            height: 40px;
    }    

`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    input{
            margin: 10px, 10px;
            flex: 1;
            border: 0px;
            box-shadow: 0px 0px 3px 0px;
            border-radius: 7px;
            padding: 10px;
            height: 40px;
    }
        input{
            margin: 10px 20px;
        }
`
export const Col = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    h1{
        font-weight: bolder;
        border-top: 1px solid gray;
        border-bottom: 1px solid gray;
        margin: 30px 0px;
        padding: 30px 0px;
    }
    #botao{
        margin-top: 20px;
        min-width: 400px
    }
        div{
            width: 100%
        }
`
