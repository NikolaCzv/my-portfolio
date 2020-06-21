import React from "react";
import Navbar from "../components/Navbar/index";
import AboutMe from "../components/AboutMe/index";
import Skills from "../components/Skills/index";
import Projects from "../components/Projects/index";
import styled from "styled-components";

const Container = styled.div`
    display: block;
`


class Dashboard extends React.Component{
    render(){
        return(
            <Container>
                <Navbar />
                <AboutMe />
                <Skills />
                <Projects />
            </Container>
        )
    }

}

export default Dashboard;