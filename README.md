# Projeto de Gestão de Checklists (Bov Control)

<p align="center">
  <img src="./src/assets/images/bov-full-logo.png" alt="Bov Control logo" />
</p>

Este projeto é um aplicativo de gestão de checklists, desenvolvido em **React Native** com suporte a **RealmDB** para gerenciamento de dados offline e sincronização com uma API. O projeto permite a criação, atualização, listagem e visualização de checklists de forma **offline-first**.

## 🛠 Tecnologias Utilizadas

- **React Native**
- **RealmDB** para gerenciamento de dados offline
- **React Navigation** para navegação entre as telas
- **Styled Components** para estilização
- **Zod** para validação de formulários
- **React Hook Form** para controle de formulários
- **Expo** para desenvolvimento mobile

## ⚙️ Funcionalidades

- Criação, atualização, listagem e visualização de checklists.
- Suporte offline-first
- Sincronização de dados ao reconectar à internet (não implementado).

## 📦 Clonando o projeto

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

### 5. Rodando o projeto

```bash
expo start

# e escolha qual dispositivo deseja rodar:
# aperte a para Android
# aperte i para iOS (se estiver em um sistema macOS)
```
