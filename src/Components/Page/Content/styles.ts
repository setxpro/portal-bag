import styled from "styled-components";

export const Container = styled.div`
  margin-top: 5px;
  margin-bottom: 10px;
  margin: auto;
  transition: all 1s ease;
  border: 1px solid ${(props) => props.theme.colors.borders};
  background: ${(props) => props.theme.colors.content};
`;

export const LayoutScreen = styled.div`
  width: 100%;
  height: calc(100vh - 65px);
  padding: 5px 10px;
`;
