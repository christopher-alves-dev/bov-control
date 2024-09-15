import { InfoBox } from "@components/info-box";
import { Loading } from "@components/loading";
import { formatDate } from "@utils/format-date";
import { useFetchChecklist } from "./hooks/use-fetch-checklist";
import * as S from "./styles";
import { Button } from "@components/button";
import { useNavigation } from "@react-navigation/native";
import { StackScreenNavigationProp } from "@routes/types";

type Props = {
  route: {
    params: {
      id: string;
    };
  };
};

export const DetailsScreen = ({ route }: Props) => {
  const { navigate } = useNavigation<StackScreenNavigationProp>();
  const { checklist, isFetching } = useFetchChecklist(route.params.id);

  if (isFetching) {
    return <Loading />;
  }

  const creationData = formatDate(checklist.created_at);
  const hadSupervision = checklist.had_supervision ? "Sim" : "Não";

  return (
    <S.Container>
      <Button onPress={() => navigate("UpdateScreen", { farm: checklist })}>
        Editar informações
      </Button>
      <S.Content>
        <InfoBox label="Supervisor(a)" value={checklist.from.name} />

        <InfoBox label="Fazendeiro(a)" value={checklist.to.name} />

        <InfoBox label="Fazenda" value={checklist.farmer.name} />

        <InfoBox label="Cidade" value={checklist.farmer.city} />

        <InfoBox label="Latitude" value={String(checklist.location.latitude)} />

        <InfoBox
          label="Longitude"
          value={String(checklist.location.latitude)}
        />

        <InfoBox
          label="Número de cabeças de gado"
          value={checklist.number_of_cows_head}
        />

        <InfoBox
          label="Quantidade de leite produzido"
          value={checklist.amount_of_milk_produced}
        />

        <InfoBox label="Tipo" value={checklist.type} />

        <InfoBox label="Criado em" value={creationData} />

        <InfoBox label="Houve supervisão?" value={hadSupervision} />
      </S.Content>
    </S.Container>
  );
};
