import styled from "styled-components";
import { Button } from 'semantic-ui-react';

export const Container = styled.div`
    border-top: solid;
    border-bottom: solid;
    height: 20vh;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    border-color: white;
    border-width: 1px;

    @media (max-width: 768px) {
        width: 100%;
        height: 30vh;
      }
`;

export const Header = styled.h1`
    color: white;
    font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
`;

export const Descritpion = styled.p`
    color: white;
    font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
`;
export const NavButton = styled(Button)``;

export const ButtonWrapper = styled.div`
      display: flex;
      flex-direction: row;
`; 


