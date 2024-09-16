import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styled from "styled-components/native";

export const Container = styled(KeyboardAwareScrollView).attrs({
  contentContainerStyle: {
    gap: 16,
    padding: 32,
  },
})``;
