import React from "react";
import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";
import styled from "styled-components";

const Container = styled.div`
`


class Dashboard extends React.Component{
    render(){
        return(
            <Container>
                <Navbar />
                <AboutMe />
            </Container>
        )
    }

}

export default Dashboard;