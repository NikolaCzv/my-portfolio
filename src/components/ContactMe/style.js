import styled from "styled-components";
import { colors } from "../../utils/colors";
import { Button } from 'semantic-ui-react';

export const Container = styled.div`
    height: 60vh;
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid;
    border-color: ${colors.white};
    border-width: 1px;
    background-color: ${colors.white};
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    overflow: scroll;

    ::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: 768px) {
        width: 100%;
        height: 90vh;
      }
`;

export const CloseBtn = styled.div`
    width: 30vw;
    display: flex;
    flex-direction: row-reverse;
    cursor: pointer;
    font-size: 16px;
    color: gray;
    margin: 10px;
    @media (max-width: 768px) {
        font-size: 12px;
        width: 75vw;
    }
`;

export const Header = styled.div`
  width: 90%;
  margin: 15px;
  font-size: 36px;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const EmailForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  @media (max-width: 768px) {
    width: 80%;
}
`;

export const EmailInput = styled.input`
  margin: 10px;
  border: solid;
  border-width: 1px;
  border-radius: 5px;
  height: 3vh;
`;

export const EmailTextArea = styled.textarea`
    margin: 10px;
    border: solid;
    border-width: 1px;
    border-radius: 5px;
    resize: none;
`;

export const EmailLabel = styled.label`
    font-size: 20px;
    font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
    margin: 10px;
`;

export const ButtonWrapper = styled.div`
  margin: 10px;
`;

export const NavButton = styled(Button)`
    width: 10vw;
    @media (max-width: 768px) {
        width: 23vw;
        height: 6vh;
    }
`;

export const CircularBtn = styled(Button)``;

export const CircularButtonWrapper = styled.div`
    display: flex;
    margin: 10px;
    width: 70%;
`;