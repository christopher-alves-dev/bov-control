import { CheckList } from "@services/api/checklist/types";
import { FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  gap: 24px;
  background-color: ${({ theme }) => theme.colors.blue[50]};
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
