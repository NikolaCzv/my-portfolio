import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 50vh;
    width: 100%;
    margin 0 auto;
    @media (max-width: 320px){
        display: block;
        width: 250%;
        height: 100vh;
        align-items: center;
        margin-top: 610px;
    }
    @media (max-width: 375px){
        display: block;
        width: 100%;
        height: 90vh;
        align-items: center;
        margin-top: 310px;
    }
`

export const LeftContainer = styled.div`
    display: block;
    float: left;
    width: 50%;
    height: 100%;
    background-color: #65CAAB;
    color: #FFFFFF;
    text-align: left;
    padding: 90px 50px;
    @media (max-width: 375px){
        display: block;
        width: 100%;
    }
}
`

export const RightConatiner = styled.div`
    display: flex;
    float: right;
    width: 50%;
    height: 100%;
    background-color: #000000;
    padding: 0px 200px;
    @media (max-width: 375px){
        display: block;
        width: 100%;
        padding: 0px;
    }
`

export const Image = styled.img`
    height: 100%;
    @media (max-width: 320px){
        width: 110%;
    }
`

export const Header = styled.div`
    font-size: 300%;
    font-family: 'Helvetica', 'Arial', sans-serif;
    font-color: #FFFFFF;
    margin-top: 60px;
    @media (max-width: 375px){
        margin: 10px;
        font-size: 25px;
    }
`

export const Text = styled.div`
    font-size: 130%;
    font-family: 'Helvetica', 'Arial', sans-serif;
    letter-spacing: 1.5px;
    @media (max-width: 320px){
     padding: 40px;
    }
    @media (max-width: 375px){
        padding: 10px;
    }
`