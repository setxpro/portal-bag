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

  width: 100%;

  .MuiFormControlLabel-root {
    margin-left: 20px; /** OBS */
  }
  overflow-y: scrol;

  table {
    width: 100%;
    user-select: none;

    thead {
      tr {
        th {
          transition: all 1s ease;
          color: ${(props) => props.theme.colors.text};
          background: ${(props) => props.theme.colors.main};
          padding: 0.5rem;

          @media (max-width: 428px) {
            &:nth-child(3) {
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

          @media (max-width: 428px) {
            &:nth-child(3) {
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
