import React from "react";
import prog from "../../assets/prog.png";
import logo from "../../assets/logo.jpg";
import {
    Divider,
    Button,
    Icon
} from "semantic-ui-react";
import { 
    Container,
    LeftContainer,
    Logo,
    ButtonWrapper,
    RightContainer,
    Image
} from "./style";

export default function Navbar(){
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