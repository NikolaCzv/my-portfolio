import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 80vh;
    width:100%;
    @media (max-width: 375px){
        display: block;
        width: 100%;
        align-items: center;
        padding: 0px;
    }
` 
export const Image = styled.img`
    width: 80%;
    margin: 140px 30px;
    @media (max-width: 375px){
        margin: 10px;
        width: 80%;
    }
`

export const Logo = styled.img`
    width: 7%;
    @media (max-width: 320px){
        width: 15%
    }
    @media (max-width: 375px){
        width: 20%;
        margin-top: 20px;
    }
`

export const LeftContainer = styled.div`
    display: block;
    width: 50%;
    height: 100%;
    font-size: 29px;
    text-align: left;
    padding: 150px 50px;
    @media (max-width: 375px){
        display: block;
        font-size: 20px;
        padding: 30px;
        width: 100%;
    } 
`

export const RightContainer = styled.div`
    width: 50%;
    height: 100%;
    @media (max-width: 375px){
        width: 100%;
        align-items: center;
    }
`

export const ButtonWrapper = styled.div`
    @media (max-width: 375px){
        width: 100%;
        align-items: center;
        margin-top: 70px;
    }
    @media (max-width: 768px) {
        display: grid;
        grid-gap: 10px;
    }
`