import { Loading } from "@components/loading";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { RealmProvider } from "@libs/realm";
import { Routes } from "@routes/index";
import theme from "@theme/index";
import { StatusBar } from "expo-status-bar";
import Toast from "react-native-toast-message";
import { ThemeProvider } from "styled-components/native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <RealmProvider>
      <ThemeProvider theme={theme}>
        <StatusBar style="auto" />
        <Routes />
        <Toast />
      </ThemeProvider>
    </RealmProvider>
  );
}
