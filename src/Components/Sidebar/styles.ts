import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export const Container = styled.div<{ wrapSidebar: boolean }>`
  height: 100vh;
  width: ${(props) => (props.wrapSidebar ? "250px" : "0px")};
  border-right: 1px solid
    ${(props) =>
      props.wrapSidebar ? props.theme.colors.borders : "transparent"};
  overflow: hidden;
  white-space: nowrap;

  transition: all 1s ease;
  border-right: 1px solid ${(props) => props.theme.colors.borders};
  border-top: 0;
  border-bottom: 0;
  border-left: 0;

  @media (max-width: 884px) {
    width: ${(props) => (props.wrapSidebar ? "250px" : "0px")};
    position: absolute;
    z-index: 9999;
  }
  @media (max-width: 428px) {
    width: ${(props) => (props.wrapSidebar ? "200px" : "0px")};
    position: fixed;
    z-index: 9999;
  }
  background: ${(props) => props.theme.colors.sidebar};

  position: fixed;
  z-index: 9999;
`;

export const ContentLogo = styled.div`
  width: 100%;
  height: 65px;
  transition: all 1s ease;
  border-bottom: 1px solid ${(props) => props.theme.colors.borders};
  background: ${(props) => props.theme.colors.sidebar};

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

      .cta {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 1rem;
        white-space: nowrap;
      }
      /* 
      .home-active {
        background: #058;
      } */
    }
  }
`;

export const CloseMenu = styled(MdClose)`
  font-size: 1.3rem;
  color: #fff;
  animation: 1s rot linear both;
  cursor: pointer;
  margin-left: 1.5rem;

  @keyframes rot {
    0% {
      transform: rotate(90deg);
    }
  }

  @media (max-width: 884px) {
    font-size: 2rem;
  }
  @media (max-width: 428px) {
    font-size: 2rem;
  }
`;

export const LogoutIcon = styled(AiOutlineLogout)`
  font-size: 1.9rem;
  color: #fff;
  cursor: pointer;
`;
export const SettingsIcon = styled(FiSettings)`
  font-size: 1.9rem;
  color: #fff;
  cursor: pointer;
`;

export const ContentAreaSettings = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  position: absolute;
  bottom: 0;

  border-top: 1px solid #555;
`;

export const ArrowIcon = styled(MdOutlineKeyboardArrowDown)`
  cursor: pointer;
  font-size: 1.8rem;
  color: #eee;
`;
