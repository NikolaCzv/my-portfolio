import React from "react";
import ruby from "../../assets/ruby.png";
import react from "../../assets/react.png";
import {
    Container,
    CloseBtn,
    Header,
    Image,
    Text,
    Title
} from "./style";

const Skills = props => {
    const handleCloseBtn = () => props.setIsSkills(false);

    return(
        <Container>
            <CloseBtn onClick={handleCloseBtn}>X</CloseBtn>
            <Header>Skills</Header>
            <Image src={react}/>
            <Title>Front End</Title>
            <Text>
                <ul>
                    <li>HTML</li>
                    <li>JavaScript, ES5/6 </li>
                    <li>React, React-Native, Redux, Gatsby</li>
                    <li>TypeScript</li>
                    <li>CSS, Styled Components</li>
                </ul>
            </Text>
            <Image src={ruby} />
            <Title>Back End</Title>
            <Text>
                <ul>
                    <li>Ruby on Rails</li>
                    <li>Active Records</li>
                    <li>SQL, PostgreSQL</li>
                </ul>
            </Text>
        </Container>
    );
}

export default Skills;