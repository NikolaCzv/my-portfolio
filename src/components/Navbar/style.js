import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 80vh;
    width:100%;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-bottom: 100px; 
    }
` ;
export const Image = styled.img`
    width: 80%;
    margin: 140px 30px;

    @media (max-width: 768px) {
        width: 100%;
        margin: 0px;
    }
`;

export const Logo = styled.img`
    width: 7%;

    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 10%;
    }
`;

export const LeftContainer = styled.div`
    display: block;
    width: 50%;
    height: 100%;
    font-size: 30px;
    text-align: left;
    padding: 150px 50px;

    @media (max-width: 768px) {
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 50vh;
        padding: 100px;
        font-size: 24px;
    }
`;

export const RightContainer = styled.div`
    width: 50%;
    height: 100%;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 50px;
    }
`;

export const ButtonWrapper = styled.div`
    @media (max-width: 768px) {
        display: grid;
        grid-gap: 10px;
    }
`;