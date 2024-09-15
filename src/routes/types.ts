import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CheckList } from "@services/api/checklist/types";

export type StackNavigationParamList = {
  HomeScreen: undefined;
  CreateScreen: undefined;
  UpdateScreen: {
    farm: CheckList;
  };
  DetailsScreen: { id: string };
};

export type StackScreenNavigationProp =
  NativeStackNavigationProp<StackNavigationParamList>;
