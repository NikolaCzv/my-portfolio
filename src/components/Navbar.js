import React from "react";
import prog from "../assets/prog.png";
import logo from "../assets/logo.jpg";
import styled from "styled-components";
import { Divider, Button, Icon } from "semantic-ui-react";

const Container = styled.div`
    display: flex;
    height: 60vh;
    width:100%;
    @media (max-width: 768px) {
        display: block;
        align-items: center;
        height: 50vh;
      }
` 
const Image = styled.img`
    width: 100%;
`

const Logo = styled.img`
    width: 7%;
    @media (max-width: 768px) {
        width: 20%;
      }
`

const LeftContainer = styled.div`
    display: block;
    width: 50%;
    height: 100%;
    font-size: 30px;
    text-align: left;
    padding: 50px 50px;
    @media (max-width: 768px) {
        width: 100%;
        height: 50vh;
        font-size: 20px;
      }
`

const RightContainer = styled.div`
    float: right;
    width: 50%;
    height: 100%;
    @media (max-width: 768px) {
        width: 100%;
        height: 40vh;
      }
`

class Navbar extends React.Component{

    render(){
        return(
                <Container>
                    <LeftContainer>
                        <Logo src={logo} className="my-logo" />
                        <Divider hidden />
                        <Button color='linkedin' href="https://www.linkedin.com/in/nikola-raicic-9b6424195/">
                            <Icon name='linkedin' /> LinkedIn
                        </Button>
                        <Divider hidden />
                        Full Stack Software Developer
                        <Divider hidden/>
                        <h3>I write clean and easy to read code.</h3>
                        <Divider hidden />
                        <Button fluid color="twitter">
                            <Icon name="envelope outline"/> Contact
                        </Button>
                    </LeftContainer>
                    <RightContainer>
                        <Image src={prog} />
                    </RightContainer>
                </Container>
        );
    }
}

export default Navbar;