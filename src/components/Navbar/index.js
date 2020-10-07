import React from "react";

import {
    Container,
    Header,
    Descritpion,
    NavButton,
    ButtonWrapper
} from "./style";

const Navbar = () => {
    return  <Container>
                <Header>Nikola Raicic</Header>
                <Descritpion>Software Developer</Descritpion>
                <ButtonWrapper>
                    <NavButton inverted color="white"> About </NavButton>
                    <NavButton inverted color="white"> Skills </NavButton>
                    <NavButton inverted color="white"> Projects </NavButton>
                    <NavButton inverted color="white"> Contact </NavButton>
                </ButtonWrapper>
            </Container>
};

export default Navbar;