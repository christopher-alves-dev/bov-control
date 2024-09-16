import { useChecklist } from "@contexts/checklist-context";
import { zodResolver } from "@hookform/resolvers/zod";
import { useObject, useRealm } from "@libs/realm";
import { Checklist } from "@libs/realm/schemas/checklist";
import { checkListApi } from "@services/api/checklist";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Toast from "react-native-toast-message";
import { formSchema, FormSchemaType } from "./schema";

export const useUpdateChecklistForm = () => {
  const { selectedChecklist } = useChecklist();
  const realm = useRealm();
  const [isLoading, setIsLoading] = useState(false);
  const [formInitialized, setFormInitialized] = useState(false);

  const offlineChecklist = useObject<Checklist>(
    "Checklist",
    selectedChecklist!._id
  );

  const formMethods = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      farm: undefined,
    },
  });

  const syncWithAPI: SubmitHandler<FormSchemaType> = async (data) => {
    try {
      const preparePayload = {
        _id: selectedChecklist!._id,
        type: data.farm.type,
        amount_of_milk_produced: Number(data.farm.milkProduction),
        number_of_cows_head: Number(data.farm.cowsQuantity),
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
          latitude: Number(data.farm.location.latitude),
          longitude: Number(data.farm.location.longitude),
        },
        created_at: selectedChecklist!.created_at,
        updated_at: new Date(),
      };

      const response = await checkListApi.update(preparePayload);
      console.log({ response: response.data });
    } catch (error) {
      console.log("Erro ao sincronizar", { error });
    }
  };

  const handleUpdate: SubmitHandler<FormSchemaType> = (data) => {
    if (!offlineChecklist) {
      Toast.show({
        type: "error",
        text1: "Checklist não encontrado!",
        text2: "Tente novamente mais tarde",
      });
      return;
    }

    try {
      setIsLoading(true);

      realm.write(() => {
        offlineChecklist!.type = data.farm.type;
        offlineChecklist!.amount_of_milk_produced = String(
          data.farm.milkProduction
        );
        offlineChecklist!.number_of_cows_head = String(data.farm.cowsQuantity);
        offlineChecklist!.had_supervision = data.farm.hadSupervision;
        offlineChecklist!.farmer.name = data.farm.name;
        offlineChecklist!.farmer.city = data.farm.city;
        offlineChecklist!.from.name = data.farm.supervisor;
        offlineChecklist!.to.name = data.farm.farmer;
        offlineChecklist!.location.latitude = Number(
          data.farm.location.latitude
        );
        offlineChecklist!.location.longitude = Number(
          data.farm.location.longitude
        );
        offlineChecklist!.updated_at = new Date();
      });
      Toast.show({
        type: "success",
        text1: "Checklist atualizado com sucesso!",
      });
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Erro ao atualizar o checklist",
        text2: "Tente novamente mais tarde",
      });
    } finally {
      setIsLoading(false);
    }

    syncWithAPI(data);
  };

  useEffect(() => {
    if (selectedChecklist && !formInitialized) {
      const defaultValues = {
        farm: {
          hadSupervision: selectedChecklist.had_supervision,
          city: selectedChecklist.farmer.city,
          cowsQuantity: String(selectedChecklist.amount_of_milk_produced),
          milkProduction: String(selectedChecklist.number_of_cows_head),
          farmer: selectedChecklist.farmer.name,
          supervisor: selectedChecklist.from.name,
          location: {
            latitude: String(selectedChecklist.location.latitude),
            longitude: String(selectedChecklist.location.longitude),
          },
          name: selectedChecklist.to.name,
          type: selectedChecklist.type,
        },
      };

      formMethods.reset(defaultValues);
      setFormInitialized(true);
    }
  }, [selectedChecklist, formInitialized, formMethods]);

  return {
    formMethods,
    handleUpdate,
    isLoading,
  };
};
