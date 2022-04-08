import { createContext } from "react";

export const asset1Data = [];

export const Asset1DataContext = createContext({
  data: asset1Data,
  setData: () => {
  }
});