# Projeto de Gestão de Checklists (Bov Control)

<p align="center">
  <img src="./src/assets/images/bov-full-logo.png" alt="Bov Control logo" />
</p>

Este projeto é um aplicativo de gestão de checklists, desenvolvido em **React Native** com suporte a **RealmDB** para gerenciamento de dados offline e sincronização com uma API. O projeto permite a criação, atualização, listagem e visualização de checklists de forma **offline-first**.

## [🛠 Tecnologias Utilizadas](#tecnologias_utilizadas)

- [React Native](https://reactnative.dev/)
- [RealmDB](https://realm.io/) para gerenciamento de dados offline
- [React Navigation](https://reactnavigation.org/) para navegação entre as telas
- [Styled Components](https://styled-components.com/) para estilização
- [Zod](https://zod.dev/) para validação de formulários
- [React Hook Form](https://react-hook-form.com/) para controle de formulários
- [Expo](https://docs.expo.dev/) para desenvolvimento mobile

## [⚙️ Funcionalidades](#funcionalidades)

- Criação, atualização, listagem e visualização de checklists.
- Suporte offline-first
- Sincronização de dados ao reconectar à internet (não implementado).

## [📦 Clonando o projeto](#clonando-o-projeto)

Para clonar o repositório e configurar o ambiente local, siga os passos abaixo:

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

### 2. Navegue até o diretório do projeto

```bash
cd nome-do-repositorio
```

### 3. Instale as dependências

```bash
# se estiver usando npm
npm install

# se estiver usando yarn
yarn install
```

### 4. Crie o arquivo .env

Na raiz do projeto, crie o `.env` com a variável de ambiente abaixo. O valor é a URL da sua api.

```env
EXPO_PUBLIC_API_URL=
```

## [🚀 Rodando o projeto](#rodando-o-projeto)

Para rodar o projeto é necessário rodá-lo com o `expo-dev-client`, já que o Realm faz instalações nativas e o Expo Go suporta apenas libs puramente Javascript.
Pode ver mais a fundo neste [Tutorial](https://www.mongodb.com/pt-br/docs/atlas/device-sdks/sdk/react-native/bootstrap-with-expo/#build-and-run-the-application) do Realm-js.

```bash
# para rodar no android
npx expo run:android

# para rodar no iOS
npx expo run:ios
```
