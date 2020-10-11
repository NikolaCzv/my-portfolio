import React, { useState } from "react";
import AboutMe from "../AboutMe";
import Projects from "../Projects";
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
    const [isProjects, setIsProjects] = useState(false);

    const handleAbout = () => setIsAbout(true);

    const handleProjects = () => setIsProjects(true);
    
    if(isAbout)
        return <AboutMe setIsAbout={setIsAbout} setIsProjects={setIsProjects}/>
    if(isProjects)
        return <Projects setIsProjects={setIsProjects}/>

    return  <Container>
                <Header>Nikola Raicic</Header>
                <Divider hidden />
                <Descritpion>Software Developer</Descritpion>
                <ButtonWrapper>
                    <NavButton inverted color="white" onClick={handleAbout}> About </NavButton>
                    <NavButton inverted color="white"> Skills </NavButton>
                    <NavButton inverted color="white" onClick={handleProjects}> Projects </NavButton>
                    <NavButton inverted color="white"> Contact </NavButton>
                </ButtonWrapper>
            </Container>
};

export default Navbar;