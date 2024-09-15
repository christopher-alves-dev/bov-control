import Entypo from "@expo/vector-icons/Entypo";
import FontAwesomeIcons from "@expo/vector-icons/FontAwesome5";
import { CheckList } from "@services/api/checklist/types";
import React, { ComponentProps } from "react";
import { TouchableOpacity } from "react-native";

import { formatDate } from "@utils/format-date";
import * as S from "./styles";

type Data = Pick<CheckList, "_id" | "farmer" | "to" | "created_at">;

type Props = {
  data: Data;
  onPress: ComponentProps<typeof TouchableOpacity>["onPress"];
};

export const Card = ({ data, onPress }: Props) => {
  const creationData = formatDate(data.created_at);

  return (
    <S.Container onPress={onPress}>
      <S.Header>
        <S.Title>{data.farmer.name}</S.Title>
      </S.Header>

      <S.Body>
        <S.CustomRow>
          <FontAwesomeIcons name="user-alt" size={20} />
          <S.InfoText>{data.to.name}</S.InfoText>
        </S.CustomRow>

        <S.CustomRow>
          <Entypo name="location-pin" size={20} />
          <S.InfoText>{data.farmer.city}</S.InfoText>
        </S.CustomRow>

        <S.CustomRow>
          <FontAwesomeIcons name="calendar-day" size={20} />
          <S.InfoText>{creationData}</S.InfoText>
        </S.CustomRow>
      </S.Body>
    </S.Container>
  );
};
