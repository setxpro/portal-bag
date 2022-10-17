import styled from "styled-components";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export const ContainerCompany = styled.div<{
  item: number;
  wr: boolean;
  wr2: boolean;
  open: boolean;
}>`
  position: absolute;
  top: 25px;
  left: 0;
  right: 0;
  height: ${(props) => (props.open ? "calc(29px * item)" : "0px")};
  display: flex;
  flex-direction: column;
  transition: all 1s ease;
  background: ${(props) => props.theme.colors.content};
  box-shadow: 1px 3px 10px #000;
  z-index: 99;
  overflow: hidden;

  a {
    transition: all 1s ease;
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;
    padding: 0.5em 1.5rem;

    display: flex;
    align-items: center;
    gap: 5px;

    &:hover {
      background: #aaaa;
    }
  }

  .drop1 {
    overflow: hidden;
    transition: all 1s ease;
    color: ${(props) => props.theme.colors.text};

    display: ${(props) => (props.wr ? "inline" : "none")};
  }
  .drop2 {
    overflow: hidden;
    transition: all 1s ease;
    color: ${(props) => props.theme.colors.text};

    display: ${(props) => (props.wr2 ? "inline" : "none")};
  }
`;

export const ArrowDown = styled(MdOutlineKeyboardArrowDown)`
  font-size: 1.3rem;
`;
