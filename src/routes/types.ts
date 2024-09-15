import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type StackNavigationParamList = {
  HomeScreen: undefined;
  CreateScreen: undefined;
  UpdateScreen: undefined;
  DetailsScreen: { id: string };
};

export type StackScreenNavigationProp =
  NativeStackNavigationProp<StackNavigationParamList>;
