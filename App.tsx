import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { Loading } from "@components/loading";
import { Routes } from "@routes/index";
import theme from "@theme/index";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Routes />
    </ThemeProvider>
  );
}
