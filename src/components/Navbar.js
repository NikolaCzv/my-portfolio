import React from "react";
import prog from "../assets/prog.png";
import logo from "../assets/logo.jpg";
import styled from "styled-components";
import { Divider, Button, Icon } from "semantic-ui-react";

const Image = styled.img`
    width: 100%
`

const Logo = styled.img`
    width: 12%;
    margin-left: -10px;
`

const Container = styled.div`
    position: absolute;
    top: 30%;
    left: 20%;
    transform: translate(-40%, -50%);
    -ms-transform: translate(-50%, -50%);
    font-size: 40px;
    padding: 12px 24px;
    cursor: pointer;
    text-align: left;
` 

class Navbar extends React.Component{
    render(){
        return(
            <div>
                <Image src={prog} />
                <Container>
                    <Logo src={logo} className="my-logo" />
                    <Divider hidden />
                    Full Stack Software Developer
                    <Divider hidden/>
                    <h3>I write clean and easy to read code.</h3>
                    <Divider hidden />
                    <Button fluid color="twitter"> <Icon name="envelope outline" /> Contact</Button>
                </Container>
            </div>
        );
    }
}

export default Navbar;