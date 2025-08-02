import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { IWeatherResponse } from "../types/IWeatherResponse";

type Store = {
  activeWeather: IWeatherResponse | undefined;
  firstSearch: boolean;
  setActiveWeather: (weather: IWeatherResponse) => void;
  setFirstSearch: (value: boolean) => void;
  loadingWeather: boolean;
  setLoadingWeather: (value: boolean) => void;
};

export const useStoreWeather = create<Store>()(
  persist(
    (set) => ({
      activeWeather: undefined,
      loadingWeather: false,
      firstSearch: false,
      setFirstSearch: (value: boolean) => set(() => ({ firstSearch: value })),
      setLoadingWeather: (value: boolean) => set(() => ({ loadingWeather: value })),
      setActiveWeather: (weather: IWeatherResponse) => set(() => ({ activeWeather: weather })),
    }),
    {
      name: "weather-storage",
      partialize: (state) => ({
        activeWeather: state.activeWeather,
        firstSearch: state.firstSearch,
      }),
    }
  )
);
