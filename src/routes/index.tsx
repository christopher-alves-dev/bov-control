import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "@screens/home-screen";
import { CreateScreen } from "@screens/create-screen";
import { UpdateScreen } from "@screens/update-screen";
import { DetailsScreen } from "@screens/details-screen";
import { StackNavigationParamList } from "./types";
import { useTheme } from "styled-components/native";

const Stack = createNativeStackNavigator<StackNavigationParamList>();

export const Routes = () => {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.blue[200],
          },
          headerTitleStyle: {
            fontFamily: theme.fonts.bold,
            fontSize: 20,
          },
          headerTintColor: theme.colors.white,
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "Listagem de Checklists",
          }}
        />
        <Stack.Screen
          name="CreateScreen"
          component={CreateScreen}
          options={{
            title: "Criação de Checklist",
          }}
        />
        <Stack.Screen
          name="UpdateScreen"
          component={UpdateScreen}
          options={{
            title: "Edição de Checklist",
          }}
        />
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{
            title: "Detalhes do Checklist",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
