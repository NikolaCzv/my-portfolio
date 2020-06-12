import React from "react";
import prog from "../assets/prog.png";
import logo from "../assets/logo.jpg";
import styled from "styled-components";
import {
    Divider,
    Button,
    Icon
} from "semantic-ui-react";

const Container = styled.div`
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
const Image = styled.img`
    width: 80%;
    margin: 140px 30px;
    @media (max-width: 375px){
        margin: 10px;
        width: 80%;
    }
`

const Logo = styled.img`
    width: 7%;
    @media (max-width: 320px){
        width: 15%
    }
    @media (max-width: 375px){
        width: 20%;
        margin-top: 20px;
    }
`

const LeftContainer = styled.div`
    display: block;
    width: 50%;
    height: 100%;
    font-size: 30px;
    text-align: left;
    padding: 150px 50px;
    @media (max-width: 375px){
        display: block;
        font-size: 20px;
        padding: 30px;
        width: 100%;
    } 
`

const RightContainer = styled.div`
    width: 50%;
    height: 100%;
    @media (max-width: 375px){
        width: 100%;
        align-items: center;
    }
`

const ButtonWrapper = styled.div`
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

class Navbar extends React.Component{

    render(){
        return(
                <Container className="navbar-main">
                    <LeftContainer className="navbar-left">
                        <Logo src={logo} className="my-logo" />
                        <Divider hidden />
                        <Divider hidden />
                        Full Stack Software Developer
                        <Divider hidden/>
                        <h3 className="write">I write clean and easy to read code.</h3>
                        <Divider hidden />
                        <ButtonWrapper>
                        <Button
                            color="twitter"
                            href="mailto:nikola.raicic@hotmail.com"
                            size="small">
                            <Icon name="envelope outline"/>
                            Contact
                        </Button>
                        <Button
                            color='linkedin'
                            href="https://www.linkedin.com/in/nikola-raicic-9b6424195/"
                            size="small">
                            <Icon name='linkedin' />
                            LinkedIn
                        </Button>
                        <Button
                            color="black"
                            size="small"
                            href="https://github.com/NikolaCzv">
                                <Icon name="github" />
                                GitHub
                        </Button>
                        </ButtonWrapper>
                        <Divider hidden />
                        <Divider hidden />
                    </LeftContainer>
                    <RightContainer className="navbar-right">
                        <Image src={prog} className="hacker"/>
                    </RightContainer>
                </Container>
        );
    }
}

export default Navbar;