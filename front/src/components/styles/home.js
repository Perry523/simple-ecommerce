import styled from "styled-components";

export const Case = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
`

export const Profile = styled.div`
background-color: white;
    width: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
        h1{
            padding: 10px 0px;
        }
    div{
        display: flex;
        padding: 30px;
        width: 100%;
        border-bottom: 1px solid #eee;
        span{
            justify-self: start;
            height: 100%;
        }
        p{
            text-align: center;
            flex: 1;
        }
    }
`