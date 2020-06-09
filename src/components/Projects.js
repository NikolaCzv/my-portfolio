import React from "react";
import styled from "styled-components";
import { Divider } from "semantic-ui-react";
import kanban from "../assets/kanban.png";
import covid from "../assets/covid.png";
import travelSmart from "../assets/travelSmart.png"

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 70vh;
    background-color: #65CAAB;
    align-items: center;
    justify-content: space-between;
    padding: 300px;
    @media (max-width: 320px){
        display: block;
        margin-top: 1000px;
        width: 250%;
        height: 330vh;
        padding: 250px;
    }
`

const CardWrapper = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
    transition: 0.3s;
    border-radius: 5px;
    border: 1px solid rgb(182, 187, 189);
    width: 320px;
    height: 500px;
    background-color: #FFFFFF;
    @media (max-width: 320px){
        display: block;
        margin: -100px 0px 150px 0px;
    }
`

const Card = styled.div`
    padding: 2px 16px;
    height: 120%;
    @media (max-width: 320px){
        margin: 0px
    }
`

const Image = styled.img`
      width: 100%;
      height: 30%;
`

const CoronaImage = styled.img`
      width: 70%;
      height: 30%;
      margin-left: 40px;
`

const Header = styled.h1`
      color: #6495ED;
`

const TextWrapper = styled.div`
    width: 100%;
    padding: 30px;
`

class Projects extends React.Component {

    render(){
        return(
            <Container>
                <CardWrapper className="card">
                    <Card>
                        <Header>Kanban App</Header>
                        <Divider />
                        <Image src={kanban} />
                        <TextWrapper>
                            <h3>Description</h3>
                            <Divider />
                            Simple Kanban App, where users can create tasks and track the progress.
                            Safety log in with a token. Ruby on rails on the back end, JavaScript and
                            Redux (thunk) on the front end.
                        </TextWrapper>
                    </Card>
                </CardWrapper>
                <CardWrapper className="card">
                    <Card>
                        <Header>Travel Smart</Header>
                        <Divider />
                        <Image src={travelSmart} />
                        <TextWrapper>
                            <h3>Description</h3>
                            <Divider />
                            Travel Smart App is made for people who like to travel.
                            You can post and share and experience at the same time you can book places from your friends.
                        </TextWrapper>
                    </Card>
                </CardWrapper>
                <CardWrapper className="card">
                    <Card>
                        <Header>Corona Report</Header>
                        <Divider />
                        <CoronaImage src={covid} width={70}/>
                        <TextWrapper>
                            <h3>Description</h3>
                            <Divider />
                            This is a project done for a client.
                            It is made to collect the data from a patient about
                            COVID-19 and helps doctors to keep track of the patient's symptoms.
                        </TextWrapper>
                    </Card>
                </CardWrapper>
            </Container>
        )
    }
}

export default Projects;