import React from "react";
import styled from "styled-components";
import myPhoto from "../assets/myPhoto.jpg";
import { Divider } from "semantic-ui-react";

const Container = styled.div`
    display: flex;
    height: 50vh;
    width: 100%;
    margin 0 auto;
    @media (max-width: 320px){
        display: block;
        width: 250%;
        height: 100vh;
        align-items: center;
        margin-top: 610px;
    }
    @media (max-width: 375px){
        display: block;
        width: 100%;
        height: 90vh;
        align-items: center;
        margin-top: 310px;
    }
`

const LeftContainer = styled.div`
    display: block;
    float: left;
    width: 50%;
    height: 100%;
    background-color: #65CAAB;
    color: #FFFFFF;
    text-align: left;
    padding: 90px 50px;
    @media (max-width: 375px){
        display: block;
        width: 100%;
    }
}
`

const RightConatiner = styled.div`
    display: flex;
    float: right;
    width: 50%;
    height: 100%;
    background-color: #000000;
    padding: 0px 200px;
    @media (max-width: 375px){
        display: block;
        width: 100%;
        padding: 0px;
    }
`

const Image = styled.img`
    height: 100%;
    @media (max-width: 320px){
        width: 110%;
    }
`

const Header = styled.div`
    font-size: 300%;
    font-family: 'Helvetica', 'Arial', sans-serif;
    font-color: #FFFFFF;
    margin-top: 60px;
    @media (max-width: 375px){
        margin: 10px;
        font-size: 25px;
    }
`

const Text = styled.div`
    font-size: 130%;
    font-family: 'Helvetica', 'Arial', sans-serif;
    letter-spacing: 1.5px;
    @media (max-width: 320px){
     padding: 40px;
    }
    @media (max-width: 375px){
        padding: 10px;
    }
`

class AboutMe extends React.Component{
    render(){
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
        )
    }
}

export default AboutMe;