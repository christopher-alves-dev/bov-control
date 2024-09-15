import { checkListApi } from "@services/api/checklist";
import { CheckList } from "@services/api/checklist/types";
import { useEffect, useState } from "react";

export const useFetchChecklist = (id: string) => {
  const [checklist, setCheckList] = useState<CheckList>({} as CheckList);
  const [isFetching, setIsFetching] = useState(true);

  const fetchChecklist = async () => {
    try {
      const response = await checkListApi.show(id);
      console.log({ response: response.data });
      setCheckList(response.data);
    } catch (error) {
      console.log({ error });
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchChecklist();
  }, []);

  return { checklist, isFetching };
};
