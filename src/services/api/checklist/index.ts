import { api } from "@services/api";
import { IndexCheckListResponse, ShowCheckListResponse } from "./types";

const index = () => api.get<IndexCheckListResponse>("/v1/checkList");

const show = (id: string) =>
  api.get<ShowCheckListResponse>(`/v1/checkList/${id}`);

export const checkListApi = {
  index,
  show,
};
