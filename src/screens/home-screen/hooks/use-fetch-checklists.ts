import { checkListApi } from "@services/api/checklist";
import { IndexCheckListResponse } from "@services/api/checklist/types";
import { useEffect, useState } from "react";
import Toast from "react-native-toast-message";

export const useFetchChecklists = () => {
  const [checklists, setCheckLists] = useState<IndexCheckListResponse>([]);
  const [isFetching, setIsFetching] = useState(true);

  const fetchChecklists = async () => {
    try {
      const response = await checkListApi.index();
      setCheckLists(response.data);
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Erro ao buscar listagem de checklists",
        text2: "Tente novamente mais tarde",
      });
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchChecklists();
  }, []);

  return { checklists, isFetching };
};
