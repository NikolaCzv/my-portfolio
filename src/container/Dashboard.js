import React from "react";
import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills"
import styled from "styled-components";

const Container = styled.div`
`


class Dashboard extends React.Component{
    render(){
        return(
            <Container>
                <Navbar />
                <AboutMe />
                <Skills />
            </Container>
        )
    }

}

export default Dashboard;