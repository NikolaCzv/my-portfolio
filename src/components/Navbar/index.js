import React, { useState } from "react";
import AboutMe from "../AboutMe";
import { Divider } from 'semantic-ui-react';

import {
    Container,
    Header,
    Descritpion,
    NavButton,
    ButtonWrapper
} from "./style";

const Navbar = () => {
    const [isAbout, setIsAbout] = useState(false);

    const handleAbout = () => setIsAbout(true);
    
    if(isAbout)
        return <AboutMe setIsAbout={setIsAbout}/>

    return  <Container>
                <Header>Nikola Raicic</Header>
                <Divider hidden />
                <Descritpion>Software Developer</Descritpion>
                <ButtonWrapper>
                    <NavButton 
                        inverted
                        color="white"
                        onClick={handleAbout}> 
                        About 
                    </NavButton>

                    <NavButton inverted color="white"> Skills </NavButton>
                    <NavButton inverted color="white"> Projects </NavButton>
                    <NavButton inverted color="white"> Contact </NavButton>
                </ButtonWrapper>
            </Container>
};

export default Navbar;