import React from "react";
import styled from "styled-components";
import myPhoto from "../assets/myPhoto.jpg";
import { Divider } from "semantic-ui-react";

const Container = styled.div`
    display: flex;
    height: 50vh;
    width: 100%;
    @media (max-width: 768px) {
        display: block;
        align-items: center;
        height: 50vh;
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
    @media (max-width: 768px) {
        width: 100%;
        height: 50vh;
        padding: 50px;
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
    @media (max-width: 768px) {
        width: 100%;
        height: 50vh;
        padding: 0px 50px;
      }
`

const Image = styled.img`
    height: 100%;
`

const Header = styled.div`
    font-size: 300%;
    font-family: 'Helvetica', 'Arial', sans-serif;
    font-color: #FFFFFF;
    margin-top: 60px;
    @media (max-width: 768px) {
        font-size: 180%;
        margin-top: 10px;
      }
    
`

const Text = styled.div`
    font-size: 150%;
    font-family: 'Helvetica', 'Arial', sans-serif;
    letter-spacing: 1.5px;
    @media (max-width: 768px) {
        font-size: 100%;
      }
`

class AboutMe extends React.Component{
    render(){
        return(
            <Container>
                <LeftContainer>
                    <Header>Few things about me...</Header>
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
                <RightConatiner>
                    <Image src={myPhoto} />
                </RightConatiner>
            </Container>
        )
    }
}

export default AboutMe;