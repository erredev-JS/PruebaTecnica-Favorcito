import { create } from 'zustand'
import type { IWeatherResponse } from '../types/IWeatherResponse'

type Store = {
 
  activeWeather: IWeatherResponse | undefined,
  setActiveWeather: (weather: IWeatherResponse) => void
 

}

export const useStoreWeather = create<Store>()((set) => ({
  activeWeather: undefined,
  
  setActiveWeather: (weather: IWeatherResponse) => set(() => ({ activeWeather: weather })),
}))

