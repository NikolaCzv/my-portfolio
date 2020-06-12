import React from "react";
import styled from "styled-components";
import ruby from "../assets/ruby.png";
import react from "../assets/react.png";
import { Divider } from "semantic-ui-react";

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 70vh;
    align-items: center;
    justify-content: space-between;
    padding: 400px;
    @media (max-width: 375px){
        display: block;
        margin-top: 580px;
        width: 100%;
        height: 25vh;
        padding: 40px;
    }
`

const CardWrapper = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
    border: 1px solid rgb(182, 187, 189);
    width: 300px;
    height: 500px;
    @media (max-width: 375px){
        display: block;
        margin: 10px 0px 50px 0px;
    }
`

const Card = styled.div`
    padding: 2px 16px;
    height: 120%;
    @media (max-width: 320px){
        height: 150%;
    }
`

const Image = styled.img`
      width: 100%;
      height: 30%;
`
const Header = styled.h1`
      color: #65CAAB;
`


class Skills extends React.Component {
    render(){
        return(
            <Container className="main-skills">
                <CardWrapper className="card">
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
                <CardWrapper className="card">
                    <Card>
                        <Header>Front End</Header>
                        <Divider />
                        <Image src={react} />
                        <h3>Skills</h3>
                        <Divider />
                            <ul className="ul">
                                <li>HTML</li>
                                <li>JavaScript, ES5/6 </li>
                                <li>React, Redux</li>
                                <li>TypeScript</li>
                                <li>CSS, Semantic UI, Material UI, Bootstrap, Styled Components</li>
                            </ul>
                    </Card>
                </CardWrapper>
            </Container>
        )
    }
}

export default Skills;