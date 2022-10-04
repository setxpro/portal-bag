import styled from "styled-components";
import logoGreen from "../../images/thumbnail.jpg";
import logoLight from "../../images/thumbnaillight.jpg";

export const Container = styled.div`
  width: 100%;
  transition: all 1s ease;
  height: calc(100vh - 65px);
  background-image: ${(props) =>
    props.theme.title === "light"
      ? `url("${logoLight}")`
      : `url("${logoGreen}")`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
