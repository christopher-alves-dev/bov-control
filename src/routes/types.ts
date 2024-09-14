import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type StackNavigationParamList = {
  HomeScreen: undefined;
  CreateScreen: undefined;
  UpdateScreen: undefined;
  DetailsScreen: { id: number };
};

export type StackScreenNavigationProp =
  NativeStackNavigationProp<StackNavigationParamList>;
