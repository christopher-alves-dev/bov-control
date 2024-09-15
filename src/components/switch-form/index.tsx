import { ComponentProps, ReactNode } from "react";
import * as S from "./styles";
import { Controller, FieldValues, useFormContext } from "react-hook-form";

type Props = ComponentProps<typeof S.Switch> & {
  renderLabel: ReactNode;
  name: keyof FieldValues;
  leftText: ReactNode;
  rightText: ReactNode;
};

export const SwitchForm = ({
  renderLabel,
  name,
  leftText,
  rightText,
  ...rest
}: Props) => {
  const formContextMethods = useFormContext();

  return (
    <Controller
      control={formContextMethods.control}
      name={name}
      render={({ field: { onChange, value } }) => {
        return (
          <S.Container>
            {renderLabel}

            <S.SwitchContainer>
              <S.Value>{leftText}</S.Value>
              <S.Switch {...rest} onValueChange={onChange} value={value} />
              <S.Value>{rightText}</S.Value>
            </S.SwitchContainer>
          </S.Container>
        );
      }}
    />
  );
};
