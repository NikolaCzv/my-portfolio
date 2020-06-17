import React from "react";
import styled from "styled-components";
import { 
    Divider,
    Button,
    Icon
 } from "semantic-ui-react";
import kanban from "../assets/kanban.png";
import covid from "../assets/covid.png";
import travelSmart from "../assets/travelSmart.png"

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 80vh;
    background-color: #65CAAB;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 auto;
    @media (max-width: 375px){
        display: block;
        margin-top: 1000px;
        width: 100%;
        height: 315vh;
        padding: 30px;
    }
`

const CardWrapper = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
    transition: 0.3s;
    border-radius: 5px;
    border: 1px solid rgb(182, 187, 189);
    width: 320px;
    height: 550px;
    background-color: #FFFFFF;
    @media (max-width: 320px){
        display: block;
        margin: -100px 0px 150px 0px;
    }
    @media (max-width: 375px){
        display: block;
        margin: 50px 0px 50px 0px;
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

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`


class Projects extends React.Component {

    render(){
        return(
            <Container className="main-projects">
                <CardWrapper className="card">
                    <Card>
                        <Header>Kanban App</Header>
                        <Divider />
                        <Image src={kanban} />
                        <TextWrapper>
                            <h3>Project Description</h3>
                            <Divider />
                            Simple Kanban App, where users can create tasks and track the progress.
                            Ruby on rails on the back end, JavaScript and
                            Redux (thunk) on the front end.
                        </TextWrapper>
                        <Divider />
                        <ButtonWrapper className="project-btns">
                            <Button
                                color="black"
                                size="tiny"
                                href="https://github.com/NikolaCzv/frontendKanban">
                                    <Icon name="github" />
                                    Front End
                            </Button>
                            <Button
                                color="black"
                                size="tiny"
                                href="https://github.com/NikolaCzv/backendKanban">
                                    <Icon name="github" />
                                    Back End
                            </Button>
                            </ButtonWrapper>
                    </Card>
                </CardWrapper>
                <CardWrapper className="card">
                    <Card>
                        <Header>Travel Smart</Header>
                        <Divider />
                        <Image src={travelSmart} />
                        <TextWrapper>
                            <h3>Project Description</h3>
                            <Divider />
                            Travel Smart App is made for people who like to travel.
                            You can post and share and experience at the same time you can book places from your friends.
                            <Divider hidden/>
                            <Divider hidden />
                            <Divider />
                            <ButtonWrapper>
                            <Button
                                color="black"
                                size="tiny"
                                href="https://github.com/NikolaCzv/frontendMyApp">
                                    <Icon name="github" />
                                    Front End
                            </Button>
                            <Button
                                color="black"
                                size="tiny"
                                href="https://github.com/NikolaCzv/backendMyApp">
                                    <Icon name="github" />
                                    Back End
                            </Button>
                            </ButtonWrapper>
                        </TextWrapper>
                    </Card>
                </CardWrapper>
                <CardWrapper className="card">
                    <Card>
                        <Header>Corona Report</Header>
                        <Divider />
                        <CoronaImage src={covid} width={70}/>
                        <TextWrapper>
                            <h3>Project Description</h3>
                            <Divider />
                            This is a project done for a client.
                            It is made to collect the data from a patient about
                            COVID-19 and helps doctors to keep track of the patient's symptoms.
                        </TextWrapper>
                        <Divider />
                        <ButtonWrapper>
                        <Button
                            color="black"
                            size="tiny"
                            href="https://github.com/NikolaCzv/coronaApp">
                            <Icon name="github" />
                            Front End
                        </Button>
                        </ButtonWrapper>
                    </Card>
                </CardWrapper>
            </Container>
        )
    }
}

export default Projects;