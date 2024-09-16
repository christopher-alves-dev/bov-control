import { createRealmContext } from "@realm/react";
import { Checklist, Farmer, Location, Person } from "./schemas/checklist";

const realmConfig = {
  schema: [Farmer, Person, Location, Checklist],
};

export const { RealmProvider, useRealm, useQuery, useObject } =
  createRealmContext(realmConfig);

// // Função para deletar o banco de dados do Realm
// const deleteRealmDatabase = () => {
//   try {
//     Realm.deleteFile(realmConfig);
//     console.log("Banco de dados Realm deletado com sucesso.");
//   } catch (error) {
//     console.error("Erro ao deletar o banco de dados Realm:", error);
//   }
// };

// deleteRealmDatabase();
