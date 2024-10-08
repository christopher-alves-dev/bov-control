import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${theme.colors.white};
`;

export const LoadIndicator = styled(ActivityIndicator).attrs(() => ({
  color: theme.colors.blue[600],
  size: "large",
}))``;
