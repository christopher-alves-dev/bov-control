import Logo from "@assets/images/bov-full-logo.png";
import { Card } from "@components/card";
import { Loading } from "@components/loading";
import { useNavigation } from "@react-navigation/native";
import { StackScreenNavigationProp } from "@routes/types";
import { Image } from "expo-image";
import { useFetchChecklists } from "./hooks/use-fetch-checklists";
import * as S from "./styles";

export const HomeScreen = () => {
  const { navigate } = useNavigation<StackScreenNavigationProp>();
  const { checklists, isFetching } = useFetchChecklists();

  if (isFetching) {
    return <Loading />;
  }

  return (
    <S.Container>
      <Image
        source={Logo}
        contentFit="contain"
        contentPosition={{
          left: 0,
        }}
        style={{
          height: 30,
        }}
      />
      <S.Checklists
        data={checklists}
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
