import React from "react";
import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import styled from "styled-components";
import MediaQuery from 'react-responsive'

const Container = styled.div`
    display: block;
`


class Dashboard extends React.Component{
    render(){
        return(
            <Container>
                <MediaQuery minDeviceWidth={1224}>
                    <Navbar />
                    <AboutMe />
                    <Skills />
                    <Projects />
                </MediaQuery>
            </Container>
        )
    }

}

export default Dashboard;