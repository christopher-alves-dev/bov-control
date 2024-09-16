import { Checklist } from "@libs/realm/schemas/checklist";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type StackNavigationParamList = {
  HomeScreen: undefined;
  CreateScreen: undefined;
  UpdateScreen: {
    farm: Checklist;
  };
  DetailsScreen: { id: Realm.BSON.ObjectId };
};

export type StackScreenNavigationProp =
  NativeStackNavigationProp<StackNavigationParamList>;
