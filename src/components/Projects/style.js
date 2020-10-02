import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 80vh;
    background-color: #65CAAB;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 auto;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 240vh;
    }
`;

export const CardWrapper = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
    transition: 0.3s;
    border-radius: 5px;
    border: 1px solid rgb(182, 187, 189);
    width: 320px;
    height: 550px;
    background-color: #FFFFFF;
`;

export const Card = styled.div`
    padding: 2px 16px;
    height: 120%;
`;

export const Image = styled.img`
      width: 100%;
      height: 30%;
`;

export const CoronaImage = styled.img`
      width: 70%;
      height: 30%;
      margin-left: 40px;
`;

export const Header = styled.h1`
      color: #6495ED;
`;

export const TextWrapper = styled.div`
    width: 100%;
    padding: 30px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
