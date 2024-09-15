import { checkListApi } from "@services/api/checklist";
import { CheckList } from "@services/api/checklist/types";
import { useEffect, useState } from "react";
import Toast from "react-native-toast-message";

export const useFetchChecklist = (id: string) => {
  const [checklist, setCheckList] = useState<CheckList>({} as CheckList);
  const [isFetching, setIsFetching] = useState(true);

  const fetchChecklist = async () => {
    try {
      const response = await checkListApi.show(id);
      setCheckList(response.data);
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Erro ao buscar checklist",
        text2: "Tente novamente mais tarde",
      });
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchChecklist();
  }, []);

  return { checklist, isFetching };
};
