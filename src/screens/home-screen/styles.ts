import { CheckList } from "@services/api/types";
import { FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  gap: 16px;
  background-color: ${({ theme }) => theme.colors.blue[100]};
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Checklists = styled(
  FlatList as new (props: FlatListProps<CheckList>) => FlatList<CheckList>
).attrs({
  contentContainerStyle: {
    gap: 12,
  },
})`
  flex-grow: 1;
`;
