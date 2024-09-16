import Logo from "@assets/images/bov-full-logo.png";
import { Card } from "@components/card";
import { Loading } from "@components/loading";
import { useNavigation } from "@react-navigation/native";
import { StackScreenNavigationProp } from "@routes/types";
import { Image } from "expo-image";
import { useFetchChecklists } from "./hooks/use-fetch-checklists";
import * as S from "./styles";
import { Button } from "@components/button";
import { Row } from "@components/row";

export const HomeScreen = () => {
  const { navigate } = useNavigation<StackScreenNavigationProp>();
  const { offlineChecklists, isFetching } = useFetchChecklists();

  if (isFetching) {
    return <Loading />;
  }

  return (
    <S.Container>
      <Row>
        <Image
          source={Logo}
          contentFit="contain"
          contentPosition={{
            left: 0,
          }}
          style={{
            flex: 1,
            height: 30,
          }}
        />
        <Button onPress={() => navigate("CreateScreen")}>
          Criar checklist
        </Button>
      </Row>
      <S.Checklists
        data={offlineChecklists}
        keyExtractor={(item) => String(item._id)}
        renderItem={({ item }) => (
          <Card
            key={String(item._id)}
            data={item}
            onPress={() => navigate("DetailsScreen", { id: item._id })}
          />
        )}
      />
    </S.Container>
  );
};
