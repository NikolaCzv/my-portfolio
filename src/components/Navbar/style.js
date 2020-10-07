import styled from "styled-components";
import { Button } from 'semantic-ui-react';
import { colors } from "../../utils/colors";

export const Container = styled.div`
    border-top: solid;
    border-bottom: solid;
    height: 25vh;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    border-color: ${colors.white};
    border-width: 1px;

    @media (max-width: 768px) {
        width: 100%;
        height: 37vh;
      }
`;

export const Header = styled.h1`
    color: ${colors.white};
    font-size: 42px;
    font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
    @media (max-width: 768px) {
        font-size: 32px;
      }
`;

export const Descritpion = styled.p`
    color: ${colors.white};
    font-size: 26px;
    font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
    @media (max-width: 768px) {
        font-size: 20px;
      }
`;
export const NavButton = styled(Button)``;

export const ButtonWrapper = styled.div`
      display: flex;
      flex-direction: row;
`; 


