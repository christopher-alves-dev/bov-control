type CheckListTypes = "BPA" | "Antibiótico" | "BPF";

export type CheckList = {
  _id: Realm.BSON.ObjectId;
  type: `${CheckListTypes}`;
  amount_of_milk_produced: string;
  farmer: {
    name: string;
    city: string;
  };
  from: {
    name: string;
  };
  to: {
    name: string;
  };
  number_of_cows_head: string;
  had_supervision: boolean;
  location: {
    latitude: number;
    longitude: number;
  };
  created_at: Date;
  updated_at: Date;
};

export type IndexCheckListResponse = CheckList[];

export type ShowCheckListResponse = CheckList;

export type CreateCheckListPayload = Omit<
  CheckList,
  "amount_of_milk_produced" | "number_of_cows_head"
> & {
  amount_of_milk_produced: number;
  number_of_cows_head: number;
};

export type UpdateCheckListPayload = CreateCheckListPayload;
