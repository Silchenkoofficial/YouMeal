import React from "react";
import { styled } from "styled-components";
import { COLORS } from "theme";

const Chip = ({ children, isActive, onClick }) => {
  return (
    <ChipWrapper active={isActive} onClick={onClick}>
      {children}
    </ChipWrapper>
  );
};

export default Chip;

const ChipWrapper = styled.div`
  padding: 8px 14px;
  border: 1px solid transparent;
  background-color: ${({ active }) => (active ? COLORS.secondary : "#ffffff")};
  color: ${({ active }) => (active ? "#ffffff" : "#000000")};
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    border: 1px solid ${(p) => COLORS.secondary};
  }
`;
