import { Button } from "@components/button";
import { InfoBox } from "@components/info-box";
import { useObject } from "@libs/realm";
import { Checklist } from "@libs/realm/schemas/checklist";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { StackScreenNavigationProp } from "@routes/types";
import { formatDate } from "@utils/format-date";
import { useChecklist } from "contexts/checklist-context";
import { useCallback } from "react";
import { Text, View } from "react-native";
import { useTheme } from "styled-components/native";
import * as S from "./styles";

export const DetailsScreen = () => {
  const theme = useTheme();
  const { selectedChecklist, setSelectedChecklist } = useChecklist();
  const offlineChecklist = useObject<Checklist>(
    "Checklist",
    selectedChecklist!._id
  );
  const { navigate } = useNavigation<StackScreenNavigationProp>();

  useFocusEffect(useCallback(() => {}, [offlineChecklist]));

  if (!offlineChecklist) {
    return (
      <View
        style={{
          backgroundColor: theme.colors.blue[50],
          flex: 1,
          alignItems: "center",
          paddingTop: 40,
        }}
      >
        <Text style={{ fontSize: 24, color: theme.colors.black[900] }}>
          Dados não encontrados
        </Text>
        <Text style={{ fontSize: 16, color: theme.colors.black[300] }}>
          Tente novamente mais tarde
        </Text>
      </View>
    );
  }

  const creationData = formatDate(offlineChecklist.created_at!);
  const hadSupervision = offlineChecklist?.had_supervision ? "Sim" : "Não";

  return (
    <S.Container>
      <Button onPress={() => navigate("UpdateScreen")}>
        Editar informações
      </Button>
      <S.Content>
        <InfoBox label="Supervisor(a)" value={offlineChecklist.from.name} />

        <InfoBox label="Fazendeiro(a)" value={offlineChecklist.to.name} />

        <InfoBox label="Fazenda" value={offlineChecklist.farmer.name} />

        <InfoBox label="Cidade" value={offlineChecklist.farmer.city} />

        <InfoBox
          label="Latitude"
          value={String(offlineChecklist.location.latitude)}
        />

        <InfoBox
          label="Longitude"
          value={String(offlineChecklist.location.latitude)}
        />

        <InfoBox
          label="Número de cabeças de gado"
          value={offlineChecklist.number_of_cows_head}
        />

        <InfoBox
          label="Quantidade de leite produzido"
          value={offlineChecklist.amount_of_milk_produced}
        />

        <InfoBox label="Tipo" value={offlineChecklist.type} />

        <InfoBox label="Criado em" value={creationData} />

        <InfoBox label="Houve supervisão?" value={hadSupervision} />
      </S.Content>
    </S.Container>
  );
};
