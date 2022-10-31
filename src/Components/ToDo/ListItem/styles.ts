import styled, { DefaultTheme } from "styled-components";
import { BsTrash } from "react-icons/bs";
type ContainerProps = {
  done: boolean;
  theme: DefaultTheme;
};

export const TrashIcon = styled(BsTrash)`
  color: ${(props) => props.theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
`;

export const Container = styled.div<ContainerProps>(
  ({ done, theme }) =>
    `
    display: flex;
    background-color: ${theme.colors.main};
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;
    margin-top: 1rem;
    input {
        width: 18px;
        height: 18px;
        margin-right: 5px;
    }
    label {
        color: ${theme.colors.text};
        flex: 1;
        text-decoration: ${done ? "line-through" : "initial"};  
    }
`
);
