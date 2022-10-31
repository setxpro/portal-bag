import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #555;
  border-radius: 15px;
  padding: 10px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  .image {
    margin-right: 5px;
    font-size: 1rem;
  }
  input {
    border: 0;
    background: transparent;
    outline: 0;
    transition: all 1s ease;
    color: ${(props) => props.theme.colors.text};
    font-size: 1rem;
    flex: 1;
  }
`;
