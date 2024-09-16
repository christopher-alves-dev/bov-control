import { useQuery, useRealm } from "@libs/realm";
import { Checklist } from "@libs/realm/schemas/checklist";
import { checkListApi } from "@services/api/checklist";
import { useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import { BSON, UpdateMode } from "realm";

export const useFetchChecklists = () => {
  const [isFetching, setIsFetching] = useState(true);
  const realm = useRealm();
  const offlineChecklists = useQuery<Checklist>("Checklist");

  const fetchChecklists = async () => {
    try {
      const response = await checkListApi.index();
      return response.data;
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Erro ao buscar listagem de checklists",
        text2: "Tente novamente mais tarde",
      });
    }
  };

  const syncWithAPI = async () => {
    try {
      const data = await fetchChecklists();
      const apiChecklists = data;

      realm.write(() => {
        apiChecklists?.forEach((checklist) => {
          const checklistConverted = {
            _id: new BSON.ObjectId(),
            type: checklist.type,
            amount_of_milk_produced: checklist.amount_of_milk_produced,
            number_of_cows_head: checklist.number_of_cows_head,
            farmer: checklist.farmer,
            from: checklist.from,
            to: checklist.to,
            had_supervision: checklist.had_supervision,
            location: checklist.location,
            created_at: checklist.created_at,
            updated_at: checklist.updated_at,
          };

          realm.create("Checklist", checklistConverted, UpdateMode.Modified);
        });
      });
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Erro ao sincronizar com a API",
        text2: `Informe o erro ao suporte: ${error}`,
      });
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    syncWithAPI();
  }, []);

  return { isFetching, offlineChecklists };
};
