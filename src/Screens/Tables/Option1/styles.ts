import styled from "styled-components";
import { BsInfoCircle } from "react-icons/bs";

export const Container = styled.div`
  .MuiRadio-root {
    &:nth-child(1) {
      color: ${(props) => props.theme.colors.btnInfoTab} !important;
    }
    &:nth-child(3) {
      color: red !important;
    }
    &:nth-child(1) {
      color: ${(props) => props.theme.colors.btnInfoTab} !important;
    }
  }

  .MuiFormControlLabel-root {
    margin-left: 20px; /** OBS */
  }
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    transition: all 1s ease;
    background: ${(props) => props.theme.colors.borders};
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
  max-height: calc(100vh - 220px);

  table {
    width: 100%;
    user-select: none;

    position: relative;

    thead {
      tr {
        th {
          transition: all 1s ease;
          padding: 0.5rem;
          color: ${(props) => props.theme.colors.text};
          background: ${(props) => props.theme.colors.main};

          position: sticky;
          top: 0;
          z-index: 9;

          @media (max-width: 834px) {
            &:nth-child(2) {
              display: none;
            }
          }

          @media (max-width: 428px) {
            &:nth-child(3) {
              display: none;
            }
            &:nth-child(2) {
              display: none;
            }
          }
        }
      }
    }

    tbody {
      tr {
        td {
          text-align: center;
          transition: all 1s ease;
          color: ${(props) => props.theme.colors.text};
          button {
            transition: all 1s ease;
            cursor: pointer;
            border: none;
            background: #42855b;
            color: #fff;
            padding: 5px;
            border-radius: 4px;
          }

          @media (max-width: 834px) {
            &:nth-child(2) {
              display: none;
            }
          }

          @media (max-width: 428px) {
            &:nth-child(3) {
              display: none;
            }
            &:nth-child(2) {
              display: none;
            }
          }
        }
        @media (max-width: 428px) {
          .area {
            width: 5px;
            margin-left: 8px;
          }
        }

        .area {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        &:nth-child(even) {
          background: #5555;
        }
      }
    }
  }
`;

export const InfoIcon = styled(BsInfoCircle)`
  cursor: pointer;
  font-size: 1.5rem;
  translate: 1s;
  color: ${(props) => props.theme.colors.btnInfoTab};
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
