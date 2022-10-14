import styled from "styled-components";

import { AiOutlineCheck } from "react-icons/ai";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 1rem;
  margin-bottom: 1rem;

  .area-title {
    margin-top: 1rem;

    border-bottom: 4px solid #0538;
    width: 200px;
  }
`;

export const ContentAreaItem = styled.div`
  transition: all 1s ease;
  background: ${(props) => props.theme.colors.content};
  padding: 0.5rem;
  border-radius: 8px;

  display: flex;
  align-items: center;

  h4 {
    font-weight: 500;
    margin-right: 5px;
    color: #888;
  }

  span {
    width: 8px;
    border: 1px solid ${(props) => props.theme.colors.text};
  }

  p {
    margin-left: 5px;
    color: ${(props) => props.theme.colors.text};
  }

  .bar-h {
    margin: 0 10px;
    color: ${(props) => props.theme.colors.text};
  }
`;
export const ContentAreaTabs = styled.div`
  padding: 0.5rem;
  border-radius: 8px;
`;
export const AreaTabs = styled.div`
  transition: all 1s ease;
  padding: 0.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.colors.text};
`;
export const Span = styled.div`
  transition: all 1s ease;
  width: 25px;
  height: 25px;
  border: 1px solid ${(props) => props.theme.colors.text};

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  input[type="radio"] {
    width: 25px;
    height: 25px;
    opacity: 0;
    position: absolute;
  }
`;

export const Button = styled.button`
  transition: all 1s ease;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.colors.btnTabs};
  background: transparent;
  color: ${(props) => props.theme.colors.btnTabs};
  padding: 0.5rem;
  border-radius: 4px;

  margin: 0 0.8rem;

  height: 30px;
`;

export const CheckIcon = styled(AiOutlineCheck)`
  color: ${(props) => props.theme.colors.text};
  transition: all 1s ease;
  font-size: 2rem;
`;
