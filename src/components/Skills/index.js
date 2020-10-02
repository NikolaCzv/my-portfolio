import React from "react";
import ruby from "../../assets/ruby.png";
import react from "../../assets/react.png";
import { Divider } from "semantic-ui-react";
import {
    Container,
    CardWrapper,
    Card,
    Header,
    Image
} from "./style";

export default function Skills(){
    return(
        <Container>
            <CardWrapper>
                <Card>
                    <Header>Back End</Header>
                    <Divider />
                    <Image src={ruby} />
                    <h3>Skills</h3>
                    <Divider />
                        <ul>
                            <li>Ruby on Rails</li>
                            <li>Active Records</li>
                            <li>SQL, PostgreSQL</li>
                        </ul>
                </Card>
            </CardWrapper>
            <CardWrapper>
                <Card>
                    <Header>Front End</Header>
                    <Divider />
                    <Image src={react} />
                    <h3>Skills</h3>
                    <Divider />
                        <ul>
                            <li>HTML</li>
                            <li>JavaScript, ES5/6 </li>
                            <li>React, React Native, Redux</li>
                            <li>TypeScript</li>
                            <li>CSS, Semantic UI, Material UI, Bootstrap, Styled Components</li>
                        </ul>
                </Card>
            </CardWrapper>
        </Container>
    );
}