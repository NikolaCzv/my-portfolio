import React from "react";
import kanban from "../../assets/kanban.png";
import tw from "../../assets/tw.png";
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
                    <Header>Transfer Wind</Header>
                    <Divider />
                    <CoronaImage src={tw} width={70}/>
                    <TextWrapper>
                        <h3>Project Description</h3>
                        <Divider />
                        Transfer Wind is a platform where soccer clubs and agents can connect with professional,
                        semi-pro and amatuer soccer players from all over the world.
                    </TextWrapper>
                    <Divider />
                    <ButtonWrapper>
                    <Button
                        color="twitter"
                        size="tiny"
                        href="https://www.transferwind.com/">
                        <Icon name="globe" />
                        Visit
                    </Button>
                    </ButtonWrapper>
                </Card>
            </CardWrapper>
        </Container>
    );
}