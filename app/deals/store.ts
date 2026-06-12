import { create } from "zustand";

export enum LayoutModel {
  Comfortable = "comfortable",
  Dense = "dense",
}

export type TStore = {
  layout: LayoutModel;
  setLayout: (layout: LayoutModel) => void;
};

export const useShopStore = create<TStore>((set) => ({
  layout: LayoutModel.Comfortable,
  setLayout: (layout: LayoutModel) => set({ layout }),
}));
