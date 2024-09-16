export const formatDate = (date: string | Date) => {
  if (!date) return "";

  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
  }).format(new Date(date));
};
