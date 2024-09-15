import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  gap: ${Platform.OS === "ios" ? "10px" : "4px"};
  align-items: flex-start;
`;

export const SwitchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const Switch = styled.Switch.attrs({
  trackColor: { false: "#767577", true: "#81b0ff" },
  thumbColor: "#f4f3f4",
})``;

export const Value = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black[900]};
`;
