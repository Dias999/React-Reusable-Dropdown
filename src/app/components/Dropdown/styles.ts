import styled from "styled-components";

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
  padding: 10px;
`;

export const DropdownListContainer = styled.div`
  padding: 10px;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text.white100};
  }
`;
