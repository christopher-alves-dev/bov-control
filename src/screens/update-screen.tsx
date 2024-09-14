import { Text, TextInput, View } from "react-native";

export const UpdateScreen = () => {
  return (
    <View>
      <Text>Tela de criação do checklist</Text>

      <View>
        <TextInput placeholder="Nome do Fazendeiro" />
        <TextInput placeholder="Nome da Fazenda" />
        <TextInput placeholder="Nome da Cidade" />
        <TextInput placeholder="Nome do Supervisor" />
        <TextInput placeholder="quantidade de leite produzida no mês" />
        <TextInput placeholder="quantidade de cabeça de gado" />
      </View>
    </View>
  );
};
