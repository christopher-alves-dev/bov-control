import { zodResolver } from "@hookform/resolvers/zod";
import { useRealm } from "@libs/realm";
import { Checklist } from "@libs/realm/schemas/checklist";
import { checkListApi } from "@services/api/checklist";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Toast from "react-native-toast-message";
import { BSON } from "realm";
import { formSchema, FormSchemaType } from "./schema";

export const useCreateChecklistForm = () => {
  const formMethods = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      farm: {
        hadSupervision: false,
      },
    },
  });
  const realm = useRealm();
  const [isLoading, setIsLoading] = useState(false);

  const syncWithAPI = async () => {
    const checklists = realm.objects<Checklist>("Checklist");

    const formattedChecklists = checklists.map((checklist) => ({
      _id: checklist._id,
      type: checklist.type,
      amount_of_milk_produced: Number(checklist.amount_of_milk_produced),
      number_of_cows_head: Number(checklist.number_of_cows_head),
      farmer: checklist.farmer,
      from: checklist.from,
      to: checklist.to,
      had_supervision: checklist.had_supervision,
      location: checklist.location,
      created_at: checklist.created_at,
      updated_at: checklist.updated_at,
    }));

    try {
      await checkListApi.create(formattedChecklists);
    } catch (error) {
      console.log("Erro ao sincronizar", { error });
    }
  };

  const handleCreate: SubmitHandler<FormSchemaType> = (data) => {
    try {
      setIsLoading(true);
      realm.write(() => {
        realm.create("Checklist", {
          _id: new BSON.ObjectId(),
          type: data.farm.type,
          amount_of_milk_produced: String(data.farm.milkProduction),
          number_of_cows_head: String(data.farm.cowsQuantity),
          had_supervision: data.farm.hadSupervision,
          farmer: {
            name: data.farm.name,
            city: data.farm.city,
          },
          from: {
            name: data.farm.supervisor,
          },
          to: {
            name: data.farm.farmer,
          },
          location: {
            latitude: data.farm.location.latitude,
            longitude: data.farm.location.longitude,
          },
          created_at: new Date(),
          updated_at: new Date(),
        });
      });
      Toast.show({
        type: "success",
        text1: "Checklist criado com sucesso!",
      });
    } catch (error) {
      console.log({ error });
      Toast.show({
        type: "error",
        text1: "Erro ao criar o checklist",
        text2: "Tente novamente mais tarde",
      });
    } finally {
      setIsLoading(false);
    }

    // Sincronizar com a API quando houver conexão
    // syncWithAPI();
  };

  return {
    formMethods,
    handleCreate,
    isLoading,
  };
};
