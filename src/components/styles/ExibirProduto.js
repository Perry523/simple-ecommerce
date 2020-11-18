import styled from 'styled-components';

export const Show = styled.div`
  display: flex;
  width: 100%;
`;
export const Row = styled.div`
  display: flex;
  width: 100%;

`
export const Col2 = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
      p{
      padding: 20px 0px; 
      margin-bottom: 15px;
      padding-bottom: 15px;
      border-bottom: solid 1px rgb(200,200,200);
      font-size: 18px;
  }

`
export const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  width: 50%;
  div{
      div{
          button{
              background-color: transparent;
              cursor: initial;
          }
      }

    button{
        width: 300px;
        height: 60px;
        border-radius: 5px;
        margin: 0px 20px;
        background-color: orangered;
        border: 0px;
        color: white;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 20px;
        text-align: center;
    
    }   
    }
`;
export const Buttons = styled.div`
    display: flex;
    flex-grow: 1;
    img{
        box-shadow: 0px 0px 1px 0px;
        padding: 1px;
        height: 70px; 
        width: 70px; 
        margin: 10px 10px;
        width: 65px;
        height: 65px;
        border-radius: 3px;
        border: 1px solid rgb(160,159,158);
      }
      img:hover{
          border: 2px solid orangered;
          cursor: pointer;
      }   
  button{
      justify-content: center;
      background-color: transparent;
      border: 0px;  
      p{
          margin: 10px;
      }
  }
`;
export const Images = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    justify-content: space-between  ;
    height: 400px;
    margin-right: 30px;
    width: 50%;
    max-width: 400px;
    img{
        width:100%;
        height: 80%;
        border-radius: 6px;

    }
    .active{
        border: 2px solid red;
    }
    div{
        align-items: center;
        height:100%;
        overflow: auto;
        width: 80%;
        justify-content: center;
        img{
            box-shadow: 0px 0px 1px 0px;
            padding: 1px;
            margin: 0px 10px;
            width: 65px;
            height: 65px;
            border-radius: 3px;
            border: 1px solid rgb(160,159,158)

        }
        img:hover{
            cursor: pointer;
            border: 2px solid orangered;
        }
    }
`;
