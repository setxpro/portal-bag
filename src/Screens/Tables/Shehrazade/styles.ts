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
            border: 1px solid ${(props) => props.theme.colors.btnTabs};
            background: transparent;
            color: ${(props) => props.theme.colors.btnTabs};
            padding: 5px;
            border-radius: 4px;
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
  color: ${(props) => props.theme.colors.btnTabs};
`;
