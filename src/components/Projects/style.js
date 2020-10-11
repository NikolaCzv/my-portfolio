import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Container = styled.div`
    height: 90vh;
    width: 35%;
    display: flex;
    overflow: scroll;
    flex-direction: column;
    align-items: center;
    border: solid;
    border-color: ${colors.white};
    border-width: 1px;
    background-color: ${colors.white};
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media (max-width: 768px) {
        width: 100%;
        padding-top: 20px;
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
        width: 65vw;
        margin-bottom: 15px;
    }
`;

export const Image = styled.img`
    width: 90%;
    height: 50%;
    border-radius: 5px;
    margin: 10px;
    @media (max-width: 768px) {
        height: 45%;
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

export const Text = styled.div`
      font-size: 16px;
      margin: 10px;
      font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
      width: 90%;
      @media (max-width: 768px) {
        font-size: 12px;
        height: 90%;
      }
`;

export const Title = styled.div`
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;  
  width: 90%;
  margin: 15px;
  font-size: 28px;
  border-bottom: solid;
  border-width: 1px;
  padding-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 22px;
  }
`