import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 70vh;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 auto;
    @media (max-width: 375px){
        display: block;
        margin-top: 580px;
        width: 100%;
        height: 25vh;
        padding: 40px;
    }
`

export const CardWrapper = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
    border: 1px solid rgb(182, 187, 189);
    width: 300px;
    height: 500px;
    @media (max-width: 375px){
        display: block;
        margin: 10px 0px 50px 0px;
    }
`

export const Card = styled.div`
    padding: 2px 16px;
    height: 120%;
    @media (max-width: 320px){
        height: 150%;
    }
`

export const Image = styled.img`
      width: 100%;
      height: 30%;
`
export const Header = styled.h1`
      color: #65CAAB;
`
