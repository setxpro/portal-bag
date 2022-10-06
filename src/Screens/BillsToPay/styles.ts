import styled from "styled-components";

import { BsInfoCircle } from "react-icons/bs";

export const Container = styled.div`
  width: 100%;
`;

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
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`;

export const ContentBtnSendAll = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  height: 2.5rem;

  padding: 0.5rem 1rem;

  button {
    cursor: pointer;
    border: none;
    background: #1c6dd0;
    color: #fff;
    padding: 5px;
    border-radius: 4px;
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

export const ContentAreaDropdownCompany = styled.div`
  cursor: pointer;
  position: relative;
  span {
    border-bottom: 2px solid ${(props) => props.theme.colors.btnInfoTab};
    color: ${(props) => props.theme.colors.text};
    user-select: none;
    font-size: 1rem;
  }
`;
export const ContentAreaDropdownOptions = styled.div`
  cursor: pointer;
  position: relative;
  span {
    border-bottom: 2px solid ${(props) => props.theme.colors.btnInfoTab};
    color: ${(props) => props.theme.colors.text};
    user-select: none;
    font-size: 1rem;
  }
`;
