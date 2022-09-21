import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const Container = styled.div<{ wrap: boolean }>`
  height: 100vh;
  width: ${(props) => (props.wrap ? "200px" : "0px")};
  border-right: 1px solid
    ${(props) => (props.wrap ? props.theme.colors.borders : "transparent")};
  overflow: hidden;
  white-space: nowrap;

  transition: all 1s ease;
  border-right: 1px solid ${(props) => props.theme.colors.borders};
  border-top: 0;
  border-bottom: 0;
  border-left: 0;

  @media (max-width: 884px) {
    width: ${(props) => (props.wrap ? "220px" : "0px")};
    position: absolute;
    z-index: 999;
  }
  @media (max-width: 428px) {
    width: ${(props) => (props.wrap ? "200px" : "0px")};
    position: absolute;
    z-index: 999;
  }

  background: ${(props) => props.theme.colors.sidebar};
`;

export const ContentLogo = styled.div`
  width: 100%;
  height: 65px;
  transition: all 1s ease;
  border-bottom: 1px solid ${(props) => props.theme.colors.borders};
  background: ${(props) => props.theme.colors.sidebarLogo};

  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    font-family: "Montserrat", sans-serif;
    font-size: 1.8em;
    transition: all 1s ease;
    color: ${(props) => props.theme.colors.textSidebar};
  }
`;

export const ContentNavArea = styled.div`
  width: 100%;

  nav {
    width: inherit;

    ul {
      width: inherit;
      display: flex;
      flex-direction: column;

      a {
        text-decoration: none;
        padding: 10px;

        font-size: 1.2rem;
        color: ${(props) => props.theme.colors.textSidebar};

        transition: all 1s ease;

        &:hover {
          opacity: 0.83;
          background: rgba(0, 255, 255, 0.1);
          color: #fff;
        }
      }

      .active {
        background: rgba(0, 255, 255, 0.1);
        color: #fff;
      }
    }
  }
`;

export const CloseMenu = styled(MdClose)`
  display: none;

  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.text};
  animation: 1s rot linear both;

  @keyframes rot {
    0% {
      transform: rotate(90deg);
    }
  }

  @media (max-width: 884px) {
    display: inline;
    font-size: 3rem;
    margin-left: 0.5rem;
  }
  @media (max-width: 428px) {
    display: inline;
    font-size: 2rem;
    margin-left: 1rem;
  }
`;
