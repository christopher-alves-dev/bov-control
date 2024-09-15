import { ViewProps } from "react-native";
import * as S from "./styles";

type Props = ViewProps;

export const Row = (props: Props) => {
  return <S.Container {...props} />;
};
