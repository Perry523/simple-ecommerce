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
export const ModalRow = styled.div`
display: flex;
align-items: center;
margin-top: 15px;
width: 90%;
input{
            border: 0px;
            box-shadow: 0px 0px 3px 0px;
            flex:1;
            border-radius: 7px;
            max-width: 500px;
            margin: 10px 1px;
            height: 33px;
            width: 100%;
            padding: 7px ;
    }
button{
        width: 40px;
        height: 40px;
        border-radius: 5px;
        border: 0px;
        background:  #0040ff;
        color: white;
    }
`
export const Modal = styled.div`
  display: none; 
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
  
`
export const Row = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    @media(max-width: 550px){
        flex-direction: column
    }

`
export const ModalContent = styled.div`
    display: flex;
    position:relative;
    flex-direction: column;
    align-items: center;
    background-color: #fefefe;
    margin: 10% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 30%;
    border-radius: 10px;
    span{
        z-index: 1;
        top: 7px;
        right: 7px;
        position: absolute;
    }
    span:hover{
        cursor: pointer;
    }
    h3{
        text-align: center;  
    }
`
export const Row3 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    button{
        width: 40px;
        height: 40px;
        border-radius: 5px;
        border: 0px;
        background:  #0040ff;
        color: white;
        margin-left: -12px;
    }
`
export const Imgs = styled.div`
display: flex;
flex-direction: column;
width: 30%;
padding: 0px 20px;
img{
    height: 80%;
}
`
export const Row2 = styled.div`
display: flex;
justify-content: center;
    img{
        border-radius: 10px;
        cursor: pointer;
    }
    .upload{
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
    width: 60%;
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
