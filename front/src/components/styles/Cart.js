import styled from 'styled-components';

export const Page = styled.div`
    justify-content: center;
    height: 100%;
    width: 100%;
    display: flex;
`;
export const Row = styled.div`
    display: flex;
    margin: 10px 5px;
    justify-content: space-between;
    align-items: center;
    span{
        margin: 0px 5px;
    }

    
`
export const Cart = styled.div`
    height: 100%;
    display: flex;
    width: 90%;

`;
export const TotalPrice = styled.div`
    background-color: white;
    border-radius: 15px;
    flex-grow: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        margin-bottom: 20px;
    }
    p{
        margin-bottom: 5px;
    }
`;
export const Products = styled.div`
    border-radius: 20px;
    display: flex;
    flex-grow: 6;
    flex-direction: column;
    margin-right: 20px;
`;
export const Product = styled.div`
    background-color: white;
    border-radius: 10px;
    display: flex;
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
`