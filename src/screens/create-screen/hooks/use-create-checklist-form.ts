import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
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

  const handleCreate: SubmitHandler<FormSchemaType> = (data) => {
    console.log(data);
  };

  return {
    formMethods,
    handleCreate,
  };
};
