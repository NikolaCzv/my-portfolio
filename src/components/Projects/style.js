import styled from "styled-components";
import { colors } from "../../utils/colors";
import { fontFamily } from "../../utils/fontFamily";

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

    ::-webkit-scrollbar {
    width: 10px;
    }

    ::-webkit-scrollbar-track {
    background: #FFFAFA;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #87CEEB;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #4682B4;
    }
    @media (max-width: 1440px){
      width: 35vw;
      height: 95vh;
    }

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
        width: 75vw;
    }
`;

export const Image = styled.img`
    width: 90%;
    height: 35%;
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
  font-family: ${fontFamily.main};
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Text = styled.div`
      font-size: 16px;
      margin: 10px;
      font-family: ${fontFamily.main};
      width: 90%;
      @media (max-width: 768px) {
        font-size: 12px;
        height: 90%;
      }
`;

export const Title = styled.div`
  font-family: ${fontFamily.main};
  width: 90%;
  margin: 15px;
  font-size: 28px;
  border-bottom: solid;
  border-width: 1px;
  padding-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const Span = styled.span`
  font-size: 16px;
  font-family: ${fontFamily.main};
  color: ${colors.link};
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;