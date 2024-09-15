import { Label } from "@components/label";
import styled from "styled-components/native";

export const Block = styled.View`
  gap: 8px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  gap: 8px;
`;

export const CustomLabel = styled(Label)`
  max-width: 160px;
`;

export const ValueContainer = styled.View`
  flex: 1;
`;

export const Value = styled.Text.attrs({
  numberOfLines: 2,
  lineBreakMode: "tail",
})`
  text-align: right;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.black[900]};
`;

export const Divider = styled.View`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  width: 100%;
`;
