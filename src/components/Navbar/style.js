import styled from "styled-components";
import { Button } from 'semantic-ui-react';
import { colors } from "../../utils/colors";
import { fontFamily } from "../../utils/fontFamily";

export const Container = styled.div`
    border-top: solid;
    border-bottom: solid;
    height: 30vh;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    border-color: ${colors.white};
    border-width: 1px;

    @media (max-width: 1440px){
      width: 70%;
    }

    @media (max-width: 768px) {
        width: 100%;
        height: 37vh;
      }
`;

export const Header = styled.h1`
    color: ${colors.white};
    font-size: 42px;
    font-family: ${fontFamily.main};
    @media (max-width: 768px) {
        font-size: 32px;
      }
`;

export const Descritpion = styled.p`
    color: ${colors.white};
    font-size: 26px;
    font-family: ${fontFamily.main};
    @media (max-width: 768px) {
        font-size: 20px;
      }
`;
export const NavButton = styled(Button)`
  width: 12vw;
  @media (max-width: 1440px){
    width: 12vw;
  }
  @media (max-width: 768px) {
    width: 23vw;
    height: 6vh;
  }
`;

export const ButtonWrapper = styled.div`
      display: flex;
      flex-direction: row;
`; 


