export const formatDate = (date: string) => {
  if (!date) return "";

  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
  }).format(new Date(date));
};
