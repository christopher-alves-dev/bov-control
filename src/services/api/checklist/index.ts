import { api } from "@services/api";
import { IndexCheckListResponse } from "../types";

const index = () => api.get<IndexCheckListResponse>("/v1/checkList");

export const checkListApi = {
  index,
};
