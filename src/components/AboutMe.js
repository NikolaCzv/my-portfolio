import React from "react";
import styled from "styled-components";
import myPhoto from "../assets/myPhoto.jpg";
import { Divider } from "semantic-ui-react"

const Container = styled.div`
    height: 50vh;
    width: 100%;
`

const LeftContainer = styled.div`
    display: block;
    float: left;
    width: 50%;
    height: 100%;
    background-color: #008080;
    color: #FFFFFF;
    text-align: left;
    padding-top: 160px;
    padding-left: 20px;
}
`

const RightConatiner = styled.div`
    display: flex;
    float: right;
    width: 50%;
    height: 100%;
    background-color: #000000;
`

const Image = styled.img`
    height: 100%;
    transform: translate(100%, 0%);
    -ms-transform: translate(-50%, -50%);
`

const Header = styled.div`
    font-size: 300%;
    font-family: 'Helvetica', 'Arial', sans-serif;
    font-color: #FFFFFF;
`

const Text = styled.div`
    font-size: 150%;
    font-family: 'Helvetica', 'Arial', sans-serif;
    letter-spacing: 1.5px;
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