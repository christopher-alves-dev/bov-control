import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type StackNavigationParamList = {
  HomeScreen: undefined;
  CreateScreen: undefined;
  UpdateScreen: undefined;
  DetailsScreen: undefined;
};

export type StackScreenNavigationProp =
  NativeStackNavigationProp<StackNavigationParamList>;
