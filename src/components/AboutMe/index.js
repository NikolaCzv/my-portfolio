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

export default function AbouMe(){
        return(
            <Container className="about-me-main">
                <LeftContainer className="about-me-left">
                    <Header className="about-me-header">Few things about me...</Header>
                    < Divider hidden />
                    < Divider hidden />
                    < Divider hidden />
                     <Text>
                        I have experience in Ruby on Rails, Javascript, React.js, etc.
                        Before my decision to become a software engineer I owned a small logistics business.
                        I decided to become a software engineer because I wanted a new high point in my life.
                        I consider myself as a hard worker and a team player.
                    </Text>
                </LeftContainer>
                <RightConatiner className="about-me-right">
                    <Image src={myPhoto} className="my-photo" />
                </RightConatiner>
            </Container>
        );
}
