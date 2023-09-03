import React from "react";
import styled from "styled-components";
import { COLORS } from "theme";

const Button = ({ onClick, disabled, light, children, full }) => {
  return (
    <ButtonWrapper
      disabled={disabled}
      light={light}
      onClick={onClick}
      full={full}
    >
      {children || "Забыли добавить текст..."}
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.div`
  width: ${(p) => (p.full ? "100%" : "auto")};
  padding: 12px 72px;
  display: inline-block;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
  transition: all 0.2s ease;
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};

  background-color: ${({ disabled, light }) =>
    disabled ? COLORS.white : light ? COLORS.white : COLORS.primary};

  color: ${({ disabled, light }) =>
    disabled ? "#ACACAC" : light ? "#000000" : "#FFFFFF"};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 20px #f2f2f3;
    background-color: ${COLORS.secondary};
    color: #ffffff;
  }

  &:active {
    transform: translateY(2px);
    background-color: ${COLORS.darkPrimary};
    color: #ffffff;
  }
`;
