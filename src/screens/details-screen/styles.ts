import styled from "styled-components/native";

export const Container = styled.View`
  flex-grow: 1;
  gap: 24px;
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.blue[50]};
`;

export const Content = styled.View`
  gap: 16px;
`;
