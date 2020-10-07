import React from "react";
import myPhoto from "../../assets/myPhoto.jpg";
import { Divider } from "semantic-ui-react";
import {
    Container,
    LeftContainer,
    Header,
    Text,
    RightConatiner,
    Image
} from "./style";

const AboutMe = () => {
        return(
            <Container>
                <LeftContainer>
                    <Header>A few things about me</Header>
                    < Divider hidden />
                    < Divider hidden />
                    < Divider hidden />
                     <Text>
                     Software Engineer with a passion for problem-solving.
                     Coding has given me an outlet to be content sitting in front of a computer for several hours creating things.
                     Previously self-employed, I am developing a new high point in my journey through code.
                     Looking for an opportunity to deliver my tech skills with dedication as a hard-working team player. 
                    </Text>
                </LeftContainer>
                <RightConatiner>
                    <Image src={myPhoto} />
                </RightConatiner>
            </Container>
        );
};

export default AboutMe;