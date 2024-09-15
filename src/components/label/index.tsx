import { ComponentProps } from "react";
import * as S from "./styles";

type Props = ComponentProps<typeof S.Label>;

export const Label = (props: Props) => {
  return <S.Label {...props} />;
};
