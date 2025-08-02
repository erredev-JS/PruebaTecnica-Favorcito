import { create } from "zustand";
import type { IWeatherResponse } from "../types/IWeatherResponse";

type Store = {
  activeWeather: IWeatherResponse | undefined;
  firstSearch: boolean; // Esto es para manejar cierta logica de renderizado de componentes en base a si hemos buscado una temperatura con anterioridad
  setActiveWeather: (weather: IWeatherResponse) => void;
  setFirstSearch: (value: boolean) => void;

  loadingWeather: boolean;
  setLoadingWeather: (value: boolean) => void;
};

export const useStoreWeather = create<Store>()((set) => ({
  activeWeather: undefined,
  loadingWeather: false,
  firstSearch: false,
  setFirstSearch: (value: boolean) => set(() => ({ firstSearch: value })),
  setLoadingWeather: (value: boolean) => set(() => ({ loadingWeather: value })),

  setActiveWeather: (weather: IWeatherResponse) => set(() => ({ activeWeather: weather })),
}));
