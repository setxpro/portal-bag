import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { MdOutlineNightlight } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { AiOutlineBell } from "react-icons/ai";

export const Container = styled.div<{
  blue: boolean;
  red: boolean;
  green: boolean;
  purple: boolean;
  gray: boolean;
  palletDGrayContainer?: boolean;
  orange: boolean;
}>`
  width: 100%;
  height: 65px;
  transition: all 1s ease;
  background: ${(props) =>
    props.blue === true
      ? props.theme.colors.blueHeader
      : props.red === true
      ? props.theme.colors.redHeader
      : props.green === true
      ? props.theme.colors.greenHeader
      : props.purple === true
      ? props.theme.colors.purpleHeader
      : props.gray === true
      ? props.theme.colors.grayHeader
      : props.palletDGrayContainer === true
      ? props.theme.colors.darkGrayHeader
      : props.orange === true
      ? props.theme.colors.orangeHeader
      : props.theme.colors.header};
  border: 1px solid ${(props) => props.theme.colors.borders};
  border-top: 0;
  border-left: 0;
  border-right: 0;

  padding: 0 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  top: 0;
  z-index: 999;
`;

export const ContentBtnMobile = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: inline;
  }
`;
export const ContentBtenPc = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
`;

export const BarsMenu = styled(FaBars)`
  cursor: pointer;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.text};
  animation: 1s rot linear both;
  @keyframes rot {
    0% {
      transform: rotate(90deg);
    }
  }

  @media (max-width: 428px) {
    font-size: 2rem;
  }
`;
export const CloseMenu = styled(MdClose)`
  cursor: pointer;
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.text};
  animation: 1s rot linear both;

  @keyframes rot {
    0% {
      transform: rotate(90deg);
    }
  }

  @media (max-width: 428px) {
    font-size: 2rem;
  }
`;
export const BellIcon = styled(AiOutlineBell)`
  cursor: pointer;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.text};
  @media (max-width: 428px) {
    font-size: 2rem;
  }
`;
export const Dark = styled(MdOutlineNightlight)`
  cursor: pointer;
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.text};
  animation: 1s rot linear both;

  @keyframes rot {
    0% {
      transform: rotate(90deg);
    }
  }

  @media (max-width: 428px) {
    font-size: 2rem;
  }
`;
export const Light = styled(MdOutlineLightMode)`
  cursor: pointer;
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.text};

  animation: 1s rot linear both;

  @keyframes rot {
    0% {
      transform: rotate(90deg);
    }
  }

  @media (max-width: 428px) {
    font-size: 2rem;
  }
`;
export const ContentLeft = styled.div`
  display: flex;
  align-items: center;
`;
export const ContentRight = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
export const ContentAreaNotify = styled.div<{
  notify: number;
  blue: boolean;
  red: boolean;
  green: boolean;
  purple: boolean;
  gray: boolean;
  palletDGrayNotify?: boolean;
  orange: boolean;
}>`
  .notification {
    position: relative;
    cursor: pointer;

    img {
      width: 55px;
      height: 55px;
      border-radius: 50%;
      border: 3px solid #fff;
      padding: 2px;
    }

    &::after {
      content: "${(props) => props.notify && props.notify}";
      background: #059;
      width: auto;
      height: 18px;
      padding: 0 4px;
      display: flex;
      align-items: center;

      position: absolute;
      top: -8px;
      right: -5px;
      color: #fff;
      border-radius: 30%;

      transition: all 1s ease;
      display: ${(props) => (props.notify === 0 ? "none" : "inline")};

      border: 2px solid
        ${(props) =>
          props.blue === true
            ? props.theme.colors.blueHeader
            : props.red === true
            ? props.theme.colors.redHeader
            : props.green === true
            ? props.theme.colors.greenHeader
            : props.purple === true
            ? props.theme.colors.purpleHeader
            : props.gray === true
            ? props.theme.colors.grayHeader
            : props.palletDGrayNotify === true
            ? props.theme.colors.darkGrayHeader
            : props.orange === true
            ? props.theme.colors.orangeHeader
            : props.theme.colors.header};
    }
  }
`;

export const ContentAreaToggleTheme = styled.div``;

export const ContentAreaNameAndAvatar = styled.div<{
  isLogged: boolean;
  blue: boolean;
  red: boolean;
  green: boolean;
  purple: boolean;
  gray: boolean;
  palletDGrayContentNameAvatar?: boolean;
  orange: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 4px;

  .avatar {
    display: flex;
    align-items: center;

    position: relative;

    img {
      width: 55px;
      height: 55px;
      border-radius: 50%;
      border: 3px solid #054845;
      padding: 2px;
    }

    .avatar-notfound {
      width: 55px;
      height: 55px;
      border-radius: 50%;
      border: 3px solid #054845;
      padding: 2px;

      display: flex;
      align-items: center;
      justify-content: center;

      span {
        font-weight: bold;
        font-size: 1.8rem;
        transition: all 1s ease;
        color: ${(props) =>
          props.blue === true
            ? "#FFF"
            : props.red === true
            ? "#FFF"
            : props.green === true
            ? "#FFF"
            : props.purple === true
            ? "#FFF"
            : props.gray === true
            ? "#FFF"
            : props.palletDGrayContentNameAvatar === true
            ? "#FFF"
            : props.orange === true
            ? "#FFF"
            : props.theme.colors.text};
      }
    }

    &::before {
      content: "";
      background: ${(props) => (props.isLogged ? "#0f0" : "#f00")};
      width: 15px;
      height: 15px;

      position: absolute;
      right: 0;
      bottom: 5px;

      transition: all 1s ease;
      border: 2px solid
        ${(props) =>
          props.blue === true
            ? props.theme.colors.blueHeader
            : props.red === true
            ? props.theme.colors.redHeader
            : props.green === true
            ? props.theme.colors.greenHeader
            : props.purple === true
            ? props.theme.colors.purpleHeader
            : props.gray === true
            ? props.theme.colors.grayHeader
            : props.palletDGrayContentNameAvatar === true
            ? props.theme.colors.darkGrayHeader
            : props.orange === true
            ? props.theme.colors.orangeHeader
            : props.theme.colors.header};
      border-radius: 50%;
    }
  }
`;

export const ContentNameArea = styled.div<{
  palletDGrayContentName: boolean;
  palletBlueContentName: boolean;
  palletReadContentName: boolean;
  palletGreenContentName: boolean;
  palletPurpleContentName: boolean;
  palletGrayContentName: boolean;
}>`
  display: flex;
  flex-direction: column;

  h4,
  h6 {
    transition: all 1s ease;
    color: ${(props) =>
      props.palletDGrayContentName === true
        ? "#FFF"
        : props.palletBlueContentName === true
        ? "#FFF"
        : props.palletReadContentName === true
        ? "#FFF"
        : props.palletGreenContentName === true
        ? "#FFF"
        : props.palletPurpleContentName === true
        ? "#FFF"
        : props.palletGrayContentName === true
        ? "#FFF"
        : props.theme.colors.text};
  }
  h4 {
    font-size: 1.1em;
    text-transform: capitalize;
    font-weight: 300;
    text-align: end;
  }
  h6 {
    font-size: 1em;
    margin-left: 30px;
    font-weight: 500;
    text-align: end;
  }
`;
