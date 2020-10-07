import React, { useState } from "react";
import AboutMe from "../AboutMe";


import {
    Container,
    Header,
    Descritpion,
    NavButton,
    ButtonWrapper
} from "./style";

const Navbar = () => {
    const [isAbout, setIsAbout] = useState(false);
    
    if(isAbout)
        return <AboutMe setIsAbout={setIsAbout}/>

    return  <Container>
                <Header>Nikola Raicic</Header>
                <Descritpion>Software Developer</Descritpion>
                <ButtonWrapper>
                    <NavButton 
                        inverted
                        color="white"
                        onClick={() => setIsAbout(true)}> 
                        About 
                    </NavButton>

                    <NavButton inverted color="white"> Skills </NavButton>
                    <NavButton inverted color="white"> Projects </NavButton>
                    <NavButton inverted color="white"> Contact </NavButton>
                </ButtonWrapper>
            </Container>
};

export default Navbar;