import React from "react";

import {
    Container,
    CloseBtn,
    Header,
    EmailForm,
    EmailInput,
    EmailTextArea,
    EmailLabel,
    NavButton,
    ButtonWrapper,
    CircularBtn,
    CircularButtonWrapper
} from "./style";

const ContactMe = props => {

    const handleCloseBtn = () => props.setIsContact(false);

    const handleLinkedinBtn = () => window.open("https://www.linkedin.com/in/nikola-raicic/", "_blank");

    const handleGithub = () => window.open("https://github.com/NikolaCzv", "_blank");

    return  <Container>
                <CloseBtn onClick={handleCloseBtn}>
                    X
                </CloseBtn>
                <Header>Contact Me</Header>
                <EmailForm action="mailto:nikola.raicic@hotmail.com" method="post" enctype="text/plain">
                    <EmailLabel>Name</EmailLabel>
                    <EmailInput type="text" name="name"/>
                    <EmailLabel>Email</EmailLabel>
                    <EmailInput type="text" name="mail"/>
                    <EmailLabel>Message</EmailLabel>
                    <EmailTextArea id="content" name="content" rows="4" cols="50"/>
                    <ButtonWrapper>
                        <NavButton inverted color="blue">Submit</NavButton>
                    </ButtonWrapper>
                </EmailForm>
                <CircularButtonWrapper>
                    <CircularBtn 
                        circular
                        color='linkedin'
                        icon='linkedin'
                        onClick={handleLinkedinBtn}
                    />
                    <CircularBtn
                        circular
                        color='github'
                        icon='github'
                        color="black"
                        onClick={handleGithub}
                    />
                </CircularButtonWrapper>
            </Container>
};

export default ContactMe;