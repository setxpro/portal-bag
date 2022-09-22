import { ReactNode } from "react";

import { Container } from "./styles";
export const Layout = ({ children }: { children: ReactNode }) => (
  <Container>{children}</Container>
);
