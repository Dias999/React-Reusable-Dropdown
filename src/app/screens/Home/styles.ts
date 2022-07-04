import styled from "styled-components";

export const HomeContainer = styled.div`
  max-width: 1320px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 16px;

  align-items: center;
`;

export const ToggleContainer = styled.div`
  padding: 16px;
  margin: 20px;
  background-color: ${({ theme }) => theme.colors.background.black500};
  border-radius: 10px;
  cursor: pointer;
`;
