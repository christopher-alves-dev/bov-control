import { InputForm } from "@components/input-form";
import { Label } from "@components/label";
import { SwitchForm } from "@components/switch-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { formSchema, FormSchemaType } from "./hooks/schema";

import { Button } from "@components/button";
import * as S from "./styles";
import { useCreateChecklistForm } from "./hooks/use-create-checklist-form";

export const CreateScreen = () => {
  const { formMethods, handleCreate } = useCreateChecklistForm();

  return (
    <FormProvider {...formMethods}>
      <S.Container>
        <InputForm
          name="farm.name"
          renderLabel={<Label>Nome da Fazenda</Label>}
        />

        <InputForm
          name="farm.farmer"
          renderLabel={<Label>Nome do Fazendeiro</Label>}
        />

        <InputForm name="farm.city" renderLabel={<Label>Cidade</Label>} />

        <InputForm
          name="farm.supervisor"
          renderLabel={<Label>Supervisor</Label>}
        />

        <InputForm name="farm.type" renderLabel={<Label>Tipo</Label>} />

        <InputForm
          name="farm.milkProduction"
          renderLabel={<Label>Produção de Leite (Litros)</Label>}
          keyboardType="numeric"
        />

        <InputForm
          name="farm.cowsQuantity"
          renderLabel={<Label>Quantidade de Vacas</Label>}
          keyboardType="numeric"
        />

        <SwitchForm
          name="farm.hadSupervision"
          renderLabel={<Label>Houve Supervisão?</Label>}
          leftText="Não"
          rightText="Sim"
        />

        <InputForm
          name="farm.location.latitude"
          renderLabel={<Label>Latitude</Label>}
          keyboardType="numbers-and-punctuation"
        />

        <InputForm
          name="farm.location.longitude"
          renderLabel={<Label>Longitude</Label>}
          keyboardType="numbers-and-punctuation"
        />

        <Button
          style={{
            marginTop: 20,
          }}
          onPress={formMethods.handleSubmit(handleCreate, (errors) => {
            console.log({ errors: errors.farm?.name });
          })}
        >
          Salvar
        </Button>
      </S.Container>
    </FormProvider>
  );
};
