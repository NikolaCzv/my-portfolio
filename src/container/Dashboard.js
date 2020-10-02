import React from "react";
import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import styled from "styled-components";

const Container = styled.div`
    display: block;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }
`;

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