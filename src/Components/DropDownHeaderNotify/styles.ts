import styled from "styled-components";

export const Container = styled.div<{ isOpen: boolean }>`
  position: absolute;
  right: 100px;
  height: ${(props) => (props.isOpen ? "200px" : "0")};
  top: 65px;
  display: flex;
  flex-direction: column;
  transition: all 1s ease;
  background: ${(props) => props.theme.colors.content};
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.54);
  z-index: 99;

  width: 500px;

  @media (max-width: 428px) {
    width: 300px;
    right: 50px;
  }

  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background: #aaaa;
  }

  .empty-titles {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-size: 2em;
      color: #999;
      border-bottom: 2px solid #0fff;
      padding-bottom: 5px;
    }
  }

  .header {
    padding: 10px 1rem;
    color: #999;
  }

  .content-tabs {
    display: flex;
    flex-direction: column;

    a {
      color: ${(props) => props.theme.colors.text};
      transition: all 1s ease;
      text-decoration: none;
      padding: 10px 15px;

      &:hover {
        background: #0645;
      }
    }
  }
`;
