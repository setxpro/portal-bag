import styled from "styled-components";
import { BsInfoCircle } from "react-icons/bs";

export const Container = styled.div`
  overflow-y: scrol;

  table {
    width: 100%;

    thead {
      tr {
        th {
          transition: all 1s ease;
          padding: 0.5rem;
          color: ${(props) => props.theme.colors.text};
          background: ${(props) => props.theme.colors.main};

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
          transition: all 1s ease;
          text-align: center;
          padding: 0.5rem;
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

        &:nth-child(even) {
          background: #aaaa;
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
