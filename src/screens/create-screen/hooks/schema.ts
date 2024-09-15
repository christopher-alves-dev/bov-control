import { z } from "zod";

export const formSchema = z.object({
  farm: z.object({
    name: z.string({
      required_error: "Nome da fazenda é obrigatório",
    }),
    farmer: z.string({
      required_error: "Nome do fazendeiro é obrigatório",
    }),
    city: z.string({
      required_error: "Cidade é obrigatória",
    }),
    supervisor: z.string({
      required_error: "Nome do supervisor é obrigatório",
    }),
    type: z.enum(["BPA", "Antibiótico", "BPF"], {
      required_error: "Tipo de fazenda é obrigatório",
    }),
    milkProduction: z.coerce
      .number({
        required_error: "Quantidade de produção de leite é obrigatória",
        invalid_type_error: "Quantidade de produção de leite é obrigatória",
      })
      .min(1, "Produção de leite inválida"),
    cowsQuantity: z.coerce
      .number({
        required_error: "Quantidade de cabeças de gado é obrigatória",
        invalid_type_error: "Quantidade de cabeças de gado é obrigatória",
      })
      .min(1, "Quantidade de cabeças de gado inválida"),
    hadSupervision: z.boolean().default(false),
    location: z.object({
      latitude: z.coerce
        .number({
          required_error: "Latitude é obrigatória",
          invalid_type_error: "Latitude é obrigatória",
        })
        .min(-90, "Latitude inválida")
        .max(90, "Latitude inválida"),
      longitude: z.coerce
        .number({
          required_error: "Longitude é obrigatório",
          invalid_type_error: "Longitude é obrigatório",
        })
        .min(-180, "Longitude inválida")
        .max(180, "Longitude inválida"),
    }),
  }),
});

export type FormSchemaType = z.infer<typeof formSchema>;
