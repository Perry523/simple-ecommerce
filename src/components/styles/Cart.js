import styled from 'styled-components';

export const Page = styled.div`
    justify-content: center;
    height: 100%;
    width: 100%;
`;
export const Row = styled.div`
    display: flex;
    margin: 10px 5px;
    justify-content: space-between;
    align-items: center;
    span{
        margin: 0px 5px;
    }
    p{
        
    }

    
`
export const Row2 = styled.div`
    display: flex;
    margin: 0px 5px;
    justify-content: space-between;
    align-items: center;
    span{
        margin: 0px 5px;
    }
    p{
        
    }

    
`
export const Cart = styled.div`
    margin-top: 20px;
    height: 100%;
    display: flex;
    width: 90%;

`;
export const TotalPrice = styled.div`
    max-width: 300px;
    border: 1px solid #eee;
    box-shadow: 0px 0px 1px 0px;
    background-color: white;
    border-radius: 15px;
    flex-grow: 4;
    display: flex;
    height: 265px;
    flex-direction: column;
    align-items: center;
    h1{
        margin-bottom: 20px;
    }
    p{
        margin-bottom: 0px;
    }
`;
export const Products = styled.div`
    border-radius: 20px;
    display: flex;
    flex-grow: 6;
    flex-direction: column;
    margin-right: 20px;
    h2{
        align-self:center;
        margin-bottom: 20px;
    }
`;
export const Product = styled.div`
    background-color: white;
    border-radius: 10px;
    display: flex;
        border: 1px solid #eee;
    box-shadow: 0px 0px 1px 0px;
    img{
        height: 100%;
        min-height: 130px;
        width: 130px;
        margin-right: 10px
    }
    padding: 10px;
    margin-bottom: 10px;
    
`;
export const Col = styled.div`
    display: flex;
    flex-direction: column;
    p{
        margin-bottom: 10px;
    }
    sub{
        margin-bottom: 15px;
    }
    h2,h1,p{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    }
    p{
        font-size: 15px;
    }
    button{
        height: 40px;
        border-radius: 5px;
        background-color: rgb(255,89,89);
        color: white;
        margin-top: 20px;
        border: 0;
        font-size: 17px;
        font-weight: 550;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
`