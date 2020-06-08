import React from "react";
import styled from "styled-components";
import { Divider } from "semantic-ui-react";

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 70vh;
    background-color: #65CAAB;
    align-items: center;
    justify-content: space-between;
    padding: 300px;
    @media (max-width: 768px) {
        display: block;
        height: 215vh;
        padding: 40px;
        margin-top: 690px;
      }
    @media (max-width: 320px) {
        display: block;
        padding: 10px;
        margin-top: 600px;
    }
`

const CardWrapper = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
    transition: 0.3s;
    border-radius: 5px;
    border: 1px solid rgb(182, 187, 189);
    width: 300px;
    height: 500px;
    background-color: #FFFFFF;
    @media (max-width: 768px) {
        margin-top: 40px;
      }
    @media (max-width: 425px){
        margin-left: 20px;
    }
    @media (max-width: 375px){
        margin-left: 0px;
    }
`

const Card = styled.div`
    padding: 2px 16px;
    height: 120%;
`

const Image = styled.img`
      width: 100%;
      height: 30%;
`
const Header = styled.h1`
      color: #6495ED;
`

class Projects extends React.Component {
    render(){
        return(
            <Container>
                <CardWrapper>
                    <Card>
                        <Header>Kanban App</Header>
                        <Divider />
                    </Card>
                </CardWrapper>
                <CardWrapper>
                    <Card>
                        <Header>Travel Smart</Header>
                        <Divider />
                    </Card>
                </CardWrapper>
                <CardWrapper>
                    <Card>
                        <Header>Corona Report</Header>
                        <Divider />
                    </Card>
                </CardWrapper>
            </Container>
        )
    }
}

export default Projects;