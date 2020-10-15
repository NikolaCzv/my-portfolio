import React from "react";
import twscreen from "../../assets/twscreen.png";
import travelSmart from "../../assets/travelSmart.png";
import karm from "../../assets/karm.png";

import {
    Container,
    CloseBtn,
    Image,
    Header,
    Text,
    Title,
    Span
} from "./style";

const Projects = props => {
    const handleCloseBtn = () => props.setIsProjects(false);

    const handleTransferWind = () => window.open("https://www.transferwind.com", "_blank");

    const handleTravelSmart = () => window.open("https://github.com/NikolaCzv/frontendMyApp", "_blank");

    const handleKarm = () => window.open("https://www.karm.co", "_blank");

    return(
        <Container>
            <CloseBtn onClick={handleCloseBtn}>X</CloseBtn>
            <Header>My Work</Header>
            <Image src={twscreen} />
            <Title>TransferWind</Title>
            <Text>
                While I was working for SavkeVip (Jan 2020 - July 2020) as a front end developer.
                I was colaborating with other developers, designers and team members. 
                Developing front end code for web and mobile, using React, React Natvie, Gatsby,
                and Styled Components.
            </Text>
            <Text>
                <Span onClick={handleTransferWind}>TransferWind</Span> {" "} 
                is a platform where soccer clubs and agents
                can connect with professional, semi-pro and amatuer,
                male or female soccer players from all over the world.
            </Text>
            <Image src={karm}/>
            <Title>Karm</Title>
            <Text>
                <Span onClick={handleKarm}>Karm</Span> {" "}
                is a COVID platform that offers a prevention for people
                to avoid COVID-19 risk by reviewing their experiences after
                visiting restaurants. Helps to make safer decisions by providing
                real-time data on businesses, the safety measures they’ve
                implemented, and how well those measures are being enforced.
            </Text> 
            <Image src={travelSmart} />
            <Title>TravelSmart</Title>
            <Text>
                One of the steps in my career change was FlatIron School (Oct 2019 - Jan 2020).
                During the 4 months bootcamp I have have learned basics of the
                full stack development.
                TravelSmart was my finall school project. Full stack done by me,
                using React and Ruby on Rails. 
            </Text>            
            <Text>
                <Span onClick={handleTravelSmart}>TravelSmart</Span> {" "}
                is a social media web app, that has a goal to help
                people who like to travel often. The idea is to help people save while
                they are on the trip. They can show the dates that they will be away and
                try to rent their place in that period of time to their folowers.
                Also, while they are away,they can share experiance while posting pictures,
                see posts from their folowers.
            </Text>
        </Container>
    );
};

export default Projects;