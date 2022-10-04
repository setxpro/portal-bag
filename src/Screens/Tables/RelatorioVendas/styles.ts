import styled from "styled-components";

import { SiMicrosoftexcel } from "react-icons/si";

export const Container = styled.div`
  width: 100%;
  .MuiTypography-root {
    transition: all 1s ease;
    color: ${(props) => props.theme.colors.text};
  }
`;

export const ContentTitle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  gap: 1rem;

  @media (max-width: 428px) {
    flex-direction: column;
  }

  .btn-excel {
    width: 40px;
    height: 40px;
    background: #053;

    border: 0;
    border-radius: 50%;

    transition: all 1s ease;
    cursor: pointer;

    &:hover {
      border: 3px solid #053;
      background: transparent;
    }
  }
`;

export const ContentDate = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .MuiButtonBase-root {
    transition: all 1s ease;
    color: ${(props) => props.theme.colors.text};
  }
  .MuiInputBase-input {
    transition: all 1s ease;
    color: ${(props) => props.theme.colors.text};
  }
  .MuiFormControl-root {
    transition: all 1s ease;
    border: 1px solid ${(props) => props.theme.colors.borders};
  }
  .MuiInputLabel-root {
    transition: all 1s ease;
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.main};
  }
  .MuiFormLabel-colorPrimary {
    padding: 0 10px;
  }
`;

export const ExcelIcon = styled(SiMicrosoftexcel)`
  font-size: 1.5rem;
  color: #fff;
`;
export const ContentBtns = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 428px) {
    width: 90%;
  }
`;

export const ContentTable = styled.div`
  height: calc(100vh - 175px);
  overflow: scroll;

  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-thumb {
    transition: all 1s ease;
    background: ${(props) => props.theme.colors.borders};
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  @media (max-width: 428px) {
    height: calc(100vh - 300px);
  }

  table {
    width: 100%;
    position: relative;
    thead {
      tr {
        th {
          position: sticky;
          top: 0;
          transition: all 1s ease;
          color: ${(props) => props.theme.colors.text};
          background: ${(props) => props.theme.colors.main};
          padding: 0.5rem 0;
        }
      }
    }

    tbody {
      tr {
        td {
          padding: 0.5rem;
          text-align: center;
          transition: all 1s ease;
          color: ${(props) => props.theme.colors.text};
          white-space: nowrap;
        }

        &:nth-child(even) {
          background: #5555;
        }
      }
    }
  }

  .message {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    label {
      font-size: 2rem;
      transition: all 1s ease;
      color: ${(props) => props.theme.colors.text};
    }
  }
`;
