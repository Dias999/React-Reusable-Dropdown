import styled from "styled-components";
import { Alignment } from "./Dropdown";

type DropdownListContainerProps = {
  isOpen: boolean;
  alignment: Alignment;
};

export const Button = styled.button`
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.background.black500};
  color: ${({ theme }) => theme.colors.text.white200};
  border: none;

  cursor: pointer;

  &:focus,
  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.primary.blue400};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.background.black900};
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownListContainer = styled.div<DropdownListContainerProps>`
  position: absolute;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  min-width: 100px;
  ${({ alignment }) => alignment}: 0;
  /* right: 0; */
  background-color: ${({ theme }) => theme.colors.background.black500};

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 8px 12px;

    color: ${({ theme }) => theme.colors.text.white100};
    cursor: pointer;

    &:focus,
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.blue200};
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.background.black900};
    }
  }
`;
