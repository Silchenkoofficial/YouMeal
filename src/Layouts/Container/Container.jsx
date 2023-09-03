import React from "react";
import { styled } from "styled-components";

const Container = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;

const ContainerWrapper = styled.div`
  max-width: 1290px;
  padding-left: 24px;
  padding-right: 24px;
  margin-left: auto;
  margin-right: auto;
`;
