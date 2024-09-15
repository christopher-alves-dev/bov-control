import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  padding: 12px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.blue[300]};
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;
