import Entypo from "@expo/vector-icons/Entypo";
import FontAwesomeIcons from "@expo/vector-icons/FontAwesome5";
import { CheckList } from "@services/api/checklist/types";
import React, { ComponentProps } from "react";
import { TouchableOpacity } from "react-native";

import { formatDate } from "@utils/format-date";
import * as S from "./styles";

type Data = Pick<CheckList, "_id" | "farmer" | "from" | "created_at">;

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
        <S.Row>
          <FontAwesomeIcons name="user-alt" size={20} />
          <S.InfoText>{data.from.name}</S.InfoText>
        </S.Row>

        <S.Row>
          <Entypo name="location-pin" size={20} />
          <S.InfoText>{data.farmer.city}</S.InfoText>
        </S.Row>

        <S.Row>
          <FontAwesomeIcons name="calendar-day" size={20} />
          <S.InfoText>{creationData}</S.InfoText>
        </S.Row>
      </S.Body>
    </S.Container>
  );
};
