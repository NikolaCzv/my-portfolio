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
    @media (max-width: 320px){
        display: block;
        width: 200%;
        align-items: center;
        padding: 10px;
    }
` 
const Image = styled.img`
    width: 80%;
    margin: 140px 30px;
    @media (max-width: 320px){
        width: 100%;
        margin-left: 70px;
    }
`

const Logo = styled.img`
    width: 7%;
    @media (max-width: 320px){
        width: 15%
    }
`

const LeftContainer = styled.div`
    display: block;
    width: 50%;
    height: 100%;
    font-size: 30px;
    text-align: left;
    padding: 150px 50px;
    @media (max-width: 320px){
        display: block;
        width: 100%;
        margin-left: 70px;
    }
      
`

const RightContainer = styled.div`
    float: right;
    width: 50%;
    height: 100%;
    @media (max-width: 320px){
        display: block;
        width: 100%;
    }
`

const ButtonWrapper = styled.div`
    @media (max-width: 768px) {
        display: grid;
        grid-gap: 5px;
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
                        <Image src={prog} />
                    </RightContainer>
                </Container>
        );
    }
}

export default Navbar;