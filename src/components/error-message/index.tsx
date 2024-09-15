import { ComponentProps } from "react";
import * as S from "./styles";

type Props = ComponentProps<typeof S.Text>;

export const ErrorMessage = (props: Props) => {
  return <S.Text {...props} />;
};
