import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  gap: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
`;

export const Header = styled.View`
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.blue[600]};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Body = styled.View`
  padding: 0 16px 16px;
  gap: 8px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const InfoText = styled.Text`
  color: ${({ theme }) => theme.colors.black[900]};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
