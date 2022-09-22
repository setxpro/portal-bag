import React from "react";

import { LabelError } from "./styles";

interface Props {
  error: string;
}

export const Error = ({ error }: Props) => <LabelError>{error}</LabelError>;
