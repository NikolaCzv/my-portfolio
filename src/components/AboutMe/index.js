import React from "react";
import myNewPhoto from "../../assets/myNewPhoto.jpg";

import {
    Container,
    Image,
    Text,
    CloseBtn,
    Span
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
                <Image src={myNewPhoto} />
                <Text>
                    Software Engineer with a passion for problem-solving.
                    Coding has given me an outlet to be content sitting in front of a computer for several hours creating things.
                    Previously self-employed, I am developing a new high point in my journey through code.
                    Looking for an opportunity to deliver my tech skills with dedication as a hard-working team player.
                    You check my work <Span onClick={handleHereBtn}>here.</Span>
                </Text>
            </Container>
        );
};

export default AboutMe;