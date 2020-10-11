import React from "react";
import twscreen from "../../assets/twscreen.png";

import {
    Container,
    CloseBtn,
    Image,
    Header,
    Text,
    Title
} from "./style";

const Projects = props => {
    const handleCloseBtn = () => props.setIsProjects(false);


    return(
        <Container>
            <CloseBtn onClick={handleCloseBtn}>X</CloseBtn>
            <Header>My Work</Header>
            <Image src={twscreen} />
            <Title>TransferWind</Title>
            <Text>
                While I was working for SavkeVip as a front end developer.
                I was colaborating with other developers, designers and team members. 
                Developing front end code for web and mobile, using React, React Natvie, Gatsby
                and Styled Components.
            </Text>
            <Text>
                TransferWind is a platform where soccer clubs and agents
                can connect with professional, semi-pro and amatuer,
                male or female soccer players from all over the world.
            </Text>
        </Container>
    );
};

export default Projects;