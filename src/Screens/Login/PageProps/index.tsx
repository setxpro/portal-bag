import { ReactNode } from "react";

import { Container } from "./styles";

const PageProps = ({ children }: { children: ReactNode }) => (
  <Container>{children}</Container>
);

export default PageProps;
