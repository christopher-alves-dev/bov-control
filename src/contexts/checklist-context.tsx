import { CheckList } from "@services/api/checklist/types";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface ChecklistContextProps {
  selectedChecklist: CheckList | null;
  setSelectedChecklist: (checklist: CheckList) => void;
}

const ChecklistContext = createContext<ChecklistContextProps | undefined>(
  undefined
);

export const ChecklistProvider = ({ children }: { children: ReactNode }) => {
  const [selectedChecklist, setSelectedChecklist] = useState<CheckList | null>(
    null
  );

  return (
    <ChecklistContext.Provider
      value={{ selectedChecklist, setSelectedChecklist }}
    >
      {children}
    </ChecklistContext.Provider>
  );
};

export const useChecklist = () => {
  const context = useContext(ChecklistContext);
  if (!context) {
    throw new Error(
      "useChecklist deve ser usado dentro de um ChecklistProvider"
    );
  }
  return context;
};
