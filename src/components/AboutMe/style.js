import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 50vh;
    width: 100%;
    margin 0 auto;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;

    }
`;

export const LeftContainer = styled.div`
    display: block;
    float: left;
    width: 50%;
    height: 45vh;
    background-color: #65CAAB;
    color: #FFFFFF;
    text-align: left;
    padding: 90px 50px;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 60vh;
        padding: 100px;
    }
}
`;

export const RightConatiner = styled.div`
    display: flex;
    float: right;
    width: 50%;
    height: 45vh;
    background-color: #000000;
    padding: 0px 200px;

    @media (max-width: 768px) {
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 60vh;
        padding: 0px;
    }
`;

export const Image = styled.img`
    height: 100%;

    @media (max-width: 768px) {
        height: 100%;
    }
`;

export const Header = styled.div`
    font-size: 42px;
    font-family: 'Helvetica', 'Arial', sans-serif;
    font-color: #FFFFFF;
    margin-top: 60px;

    @media (max-width: 768px) {
        display: grid;
        justify-content: center;
        align-items: center;
        width: 100%;
        font-size: 36px;
    }
`;

export const Text = styled.div`
    font-size: 16px;
    font-family: 'Helvetica', 'Arial', sans-serif;
    letter-spacing: 1.5px;

    @media (max-width: 768px) {
        display: grid;
        justify-content: center;
        align-items: center;
        width: 100%;
        font-size: 14px;
    }
`;