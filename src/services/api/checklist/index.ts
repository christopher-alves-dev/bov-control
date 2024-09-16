import { api } from "@services/api";
import {
  CreateCheckListPayload,
  IndexCheckListResponse,
  ShowCheckListResponse,
} from "./types";

const index = () => api.get<IndexCheckListResponse>("/v1/checkList");

const show = (id: string) =>
  api.get<ShowCheckListResponse>(`/v1/checkList/${id}`);

const create = (payload: CreateCheckListPayload) =>
  api.post("/v1/checkList", payload);

export const checkListApi = {
  index,
  show,
  create,
};
