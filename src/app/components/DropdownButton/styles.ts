import styled from "styled-components";

export const DropdownButtonContainer = styled.div`
  padding: 8px 12px;
  cursor: pointer;

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.blue200};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.background.black900};
  }
`;
