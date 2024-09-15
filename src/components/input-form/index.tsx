import { ErrorMessage } from "@components/error-message";
import { ComponentProps, ReactNode } from "react";
import { Controller, get, useFormContext } from "react-hook-form";
import * as S from "./styles";
import { TextInputProps } from "react-native";

type Props = TextInputProps & {
  renderLabel?: ReactNode;
  name: string;
};

export const InputForm = ({ renderLabel, name, ...rest }: Props) => {
  const formContextMethods = useFormContext();

  return (
    <Controller
      control={formContextMethods.control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => {
        const errorMessage = get(formContextMethods.formState.errors, name)
          ?.message as String;

        return (
          <S.Container>
            {renderLabel}
            <S.Input
              {...rest}
              haveError={Boolean(errorMessage)}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />

            {Boolean(errorMessage) && (
              <ErrorMessage>{errorMessage}</ErrorMessage>
            )}
          </S.Container>
        );
      }}
    />
  );
};
