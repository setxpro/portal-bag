import styled from "styled-components";

export const Container = styled.div`
  /* height: 600px; */
  margin-top: 5px;
  margin-bottom: 10px;
  transition: all 1s ease;
  border: 1px solid ${(props) => props.theme.colors.borders};
  /* border-radius: 1rem; */
  background: ${(props) => props.theme.colors.content};
`;

export const LayoutScreen = styled.div`
  width: 100%;
  height: calc(100vh - 65px);
  padding: 5px 10px;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 2px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.borders};
  }
`;
