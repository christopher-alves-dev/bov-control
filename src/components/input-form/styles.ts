import { Platform } from "react-native";
import styled, { css } from "styled-components/native";

type InputErrorProps = {
  haveError: boolean;
};

export const Container = styled.View`
  gap: 4px;
`;

export const Input = styled.TextInput<InputErrorProps>`
  padding: ${Platform.OS === "ios" ? "10px" : "4px 10px"};
  background-color: ${({ haveError, theme }) =>
    haveError ? theme.colors.red[100] : theme.colors.white};
  border-radius: 8px;
  ${({ haveError, theme }) =>
    haveError &&
    css`
      border: 2px solid ${theme.colors.red[500]};
    `}
`;
