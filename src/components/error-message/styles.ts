import styled from "styled-components/native";

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.red[500]};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
