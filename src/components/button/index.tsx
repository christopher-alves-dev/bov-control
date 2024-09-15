import { ComponentProps } from "react";
import * as S from "./styles";
import { TouchableOpacity } from "react-native";

type Props = Omit<ComponentProps<typeof TouchableOpacity>, "children"> & {
  children: string;
};

export const Button = ({ children, ...rest }: Props) => {
  return (
    <S.Container {...rest}>
      <S.ButtonText>{children}</S.ButtonText>
    </S.Container>
  );
};
