import React from "react";
import kanban from "../../assets/kanban.png";
import covid from "../../assets/covid.png";
import travelSmart from "../../assets/travelSmart.png";
import { 
    Divider,
    Button,
    Icon
 } from "semantic-ui-react";
 import {
     Header,
     Card,
     CardWrapper,
     Image,
     Container,
     TextWrapper,
     ButtonWrapper,
     CoronaImage
 } from "./style";

export default function Projects(){
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
    );
}