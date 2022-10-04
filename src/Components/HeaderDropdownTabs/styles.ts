import styled from "styled-components";

export const ContainerCompany = styled.div`
  position: absolute;
  top: 25px;
  left: -45px;
  height: 93px;
  display: flex;
  flex-direction: column;
  transition: all 1s ease;
  background: ${(props) => props.theme.colors.content};
  box-shadow: 1px 3px 10px #000;
  z-index: 9999;

  a {
    transition: all 1s ease;
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;
    padding: 0.5em 1rem;

    &:hover {
      background: #aaaa;
    }
  }
`;
export const ContainerOption = styled.div`
  position: absolute;
  top: 25px;
  right: 0;
  height: 80px;
  width: 200px;
  display: flex;
  flex-direction: column;
  transition: all 1s ease;
  background: ${(props) => props.theme.colors.content};
  box-shadow: 1px 3px 10px #000;
  z-index: 9999;

  a {
    transition: all 1s ease;
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;
    padding: 0.5em 1rem;

    &:hover {
      background: #aaaa;
    }
  }
`;
