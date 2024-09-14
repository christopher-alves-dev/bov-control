import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "@screens/home-screen";
import { CreateScreen } from "@screens/create-screen";
import { UpdateScreen } from "@screens/update-screen";
import { DetailsScreen } from "@screens/details-screen";
import { StackNavigationParamList } from "./types";

const Stack = createNativeStackNavigator<StackNavigationParamList>();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CreateScreen" component={CreateScreen} />
        <Stack.Screen name="UpdateScreen" component={UpdateScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
