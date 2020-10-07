import styled from "styled-components";

export const Container = styled.div`
    height: 35vh;
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    border: solid;
    border-color: white;
    border-width: 1px;
    background-color: white;
    border-radius: 5px;
    height: 80vh;

    @media (max-width: 768px) {
        width: 100%;
      }
`;