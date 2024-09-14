import { Card } from "@components/card";
import { useNavigation } from "@react-navigation/native";
import { StackScreenNavigationProp } from "@routes/types";
import * as S from "./styles";

export const mock = [
  {
    _id: 565,
    type: "BPF",
    amount_of_milk_produced: "300",
    farmer: {
      name: "Fazenda São Rock",
      city: "São Rock",
    },
    from: {
      name: "Luciano Camargo",
    },
    to: {
      name: "Fernando Siqueira",
    },
    number_of_cows_head: "17",
    had_supervision: true,
    location: {
      latitude: -23.5,
      longitude: -46.6,
    },
    created_at: "2022-02-01T10:10:21.748Z",
    updated_at: "2024-09-10T14:48:37.603Z",
    __v: 0,
  },
  {
    _id: 4094485119311083500,
    type: "Antibiótico",
    amount_of_milk_produced: "100",
    farmer: {
      name: "WashingtonFarm",
      city: "Washington",
    },
    from: {
      name: "Laura",
    },
    to: {
      name: "Carlos",
    },
    number_of_cows_head: "20",
    had_supervision: true,
    location: {
      latitude: 0,
      longitude: 0,
    },
    created_at: "2023-09-01T16:33:30.908Z",
    updated_at: "2024-09-10T14:38:55.043Z",
    __v: 0,
  },
  {
    _id: 714881196645292000,
    type: "Antibiótico",
    amount_of_milk_produced: "9090",
    farmer: {
      name: "Lorentz",
      city: "Ubá",
    },
    from: {
      name: "Lata Lorentz",
    },
    to: {
      name: "Carlos Moraes",
    },
    number_of_cows_head: "9090",
    had_supervision: true,
    location: {
      latitude: -23.5,
      longitude: -46.6,
    },
    created_at: "2023-09-03T18:36:29.493Z",
    updated_at: "2024-09-10T14:38:03.378Z",
    __v: 0,
  },
];

export const HomeScreen = () => {
  const { navigate } = useNavigation<StackScreenNavigationProp>();

  return (
    <S.Container>
      <S.Title>Lista de Checklists</S.Title>

      <S.Checklists
        data={mock}
        renderItem={({ item }) => (
          <Card
            key={item._id}
            data={item}
            onPress={() => navigate("DetailsScreen", { id: item._id })}
          />
        )}
      />
    </S.Container>
  );
};
