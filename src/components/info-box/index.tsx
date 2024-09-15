import * as S from "./styles";

type Props = {
  label: string;
  value: string;
};

export const InfoBox = ({ label, value }: Props) => {
  return (
    <S.Block>
      <S.CustomRow>
        <S.CustomLabel>{label}</S.CustomLabel>
        <S.ValueContainer>
          <S.Value>{value}</S.Value>
        </S.ValueContainer>
      </S.CustomRow>
      <S.Divider />
    </S.Block>
  );
};
