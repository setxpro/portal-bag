import styled from "styled-components";

import { BsInfoCircle } from "react-icons/bs";

export const Container = styled.div``;

export const ContainerAuthors = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  p,
  a {
    color: #999;
  }
  p {
    a {
    }
  }
`;
export const ContentTopArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 428px) {
    gap: 1rem;
    flex-direction: column;
  }
`;
export const BtnTabs = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  > div {
    position: relative;

    span {
      transition: all 1s ease;

      background: ${(props) => props.theme.colors.main};
      width: auto;
      height: 15px;
      border-radius: 50%;
      padding: 0 5px;

      display: flex;
      align-items: center;
      justify-content: center;

      color: ${(props) => props.theme.colors.text};
      font-weight: 700;

      position: absolute;
      right: -3px;
      top: -8px;
    }

    button {
      transition: all 1s ease;
      cursor: pointer;
      border: 1px solid ${(props) => props.theme.colors.text};
      background: transparent;
      color: ${(props) => props.theme.colors.text};
      padding: 5px;
      border-radius: 4px;
    }
  }

  .active-tab {
    span {
      transition: all 1s ease;

      background: ${(props) => props.theme.colors.main};
      width: auto;
      height: 15px;
      border-radius: 50%;
      padding: 0 5px;

      display: flex;
      align-items: center;
      justify-content: center;

      color: ${(props) => props.theme.colors.btnTabs};
      font-weight: 700;

      position: absolute;
      right: -3px;
      top: -8px;
    }

    button {
      background: #057;
      color: #fff;
    }
  }
`;

export const ContentBtnSendAll = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  height: 2.5rem;

  padding: 0.5rem 1rem;

  button {
    transition: all 1s ease;
    cursor: pointer;
    border: 1px solid ${(props) => props.theme.colors.btnTabs};
    background: transparent;
    color: ${(props) => props.theme.colors.btnTabs};
    padding: 5px;
    border-radius: 4px;
  }
`;
export const TabsInternal = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  button {
    transition: all 1s ease;
    cursor: pointer;
    border: 1px solid ${(props) => props.theme.colors.text};
    background: transparent;
    color: ${(props) => props.theme.colors.text};
    padding: 5px;
    border-radius: 4px;
  }

  .active-sub-tab {
    span {
      transition: all 1s ease;

      background: ${(props) => props.theme.colors.main};
      width: auto;
      height: 15px;
      border-radius: 50%;
      padding: 0 5px;

      display: flex;
      align-items: center;
      justify-content: center;

      color: ${(props) => props.theme.colors.btnTabs};
      font-weight: 700;

      position: absolute;
      right: -3px;
      top: -8px;
    }

    button {
      background: #057;
      color: #fff;
    }
  }
`;

export const InfoIcon = styled(BsInfoCircle)`
  cursor: pointer;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.btnTabs};
`;

export const ContentAreabtns = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;

  @media (max-width: 428px) {
    gap: 1rem;
  }
`;
