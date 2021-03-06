import React from "react";
import styled from "styled-components";
import mountains4k from "../assets/mountains4k.jpg";
import Navbar from "../components/Navbar";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-image: url(${mountains4k});
    background-size: cover;
    padding: 50px;

    @media (max-width: 1440px){
        padding: 30px;
    }

    @media (max-width: 768px){
        padding: 30px;
    }
`;

const Dashboard = () => {

    return(
        <Container>
            <Navbar />
        </Container>
    );
};

export default Dashboard;