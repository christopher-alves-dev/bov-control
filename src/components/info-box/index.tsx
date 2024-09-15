import * as S from "./styles";

type Props = {
  label: string;
  value: string;
};

export const InfoBox = ({ label, value }: Props) => {
  return (
    <S.Block>
      <S.Row>
        <S.Label>{label}</S.Label>
        <S.ValueContainer>
          <S.Value>{value}</S.Value>
        </S.ValueContainer>
      </S.Row>
      <S.Divider />
    </S.Block>
  );
};
