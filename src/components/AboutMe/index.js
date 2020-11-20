import React from "react";
import myPhoto from "../../assets/myPhoto.jpg";

import {
    Container,
    Image,
    Text,
    CloseBtn,
    Span,
    Header
} from "./style";

const AboutMe = props => {
        const handleCloseBtn = () => props.setIsAbout(false);

        const handleHereBtn = () => {
            props.setIsAbout(false);
            props.setIsProjects(true);
        };

        return(
            <Container>
                <CloseBtn onClick={handleCloseBtn}>
                    X
                </CloseBtn>
                <Header>About Me</Header>
                <Image src={myPhoto} />
                <Text>
                    Software Engineer with a passion for problem-solving.
                    Coding has given me an outlet to be content sitting in front of a computer for several hours creating things.
                    Previously self-employed, I am developing a new high point in my journey through code.
                    Looking for an opportunity to deliver my tech skills.
                    Check out my work <Span onClick={handleHereBtn}>here.</Span>
                </Text>
            </Container>
        );
};

export default AboutMe;