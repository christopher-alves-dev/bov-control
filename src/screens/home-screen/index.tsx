import Logo from "@assets/images/bov-full-logo.png";
import { Card } from "@components/card";
import { Loading } from "@components/loading";
import { useNavigation } from "@react-navigation/native";
import { StackScreenNavigationProp } from "@routes/types";
import { Image } from "expo-image";
import { useFetchChecklists } from "./hooks/use-fetch-checklists";
import * as S from "./styles";
import { Button } from "@components/button";

export const HomeScreen = () => {
  const { navigate } = useNavigation<StackScreenNavigationProp>();
  const { checklists, isFetching } = useFetchChecklists();

  if (isFetching) {
    return <Loading />;
  }

  return (
    <S.Container>
      <S.Row>
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
      </S.Row>
      <S.Checklists
        data={checklists}
        keyExtractor={(item) => String(item._id)}
        renderItem={({ item }) => (
          <Card
            key={item._id}
            data={item}
            onPress={() => navigate("DetailsScreen", { id: String(item._id) })}
          />
        )}
      />
    </S.Container>
  );
};
