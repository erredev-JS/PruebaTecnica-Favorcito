import { create } from 'zustand'
import type { IGeolocation } from '../types/IGeolocation'

type Store = {
  searchGeolocation: string
  activeGeolocation: IGeolocation | undefined
  arrayGeolocations: IGeolocation[]
  setActiveGeolocation: (geolocation: IGeolocation) => void
  setArrayGeolocations: (geolocations: IGeolocation[]) => void
  setSearch: (search: string) => void

}

export const useStoreGeolocation = create<Store>()((set) => ({
  searchGeolocation: "",
  setSearch: (search: string) => set(() => ({searchGeolocation: search})),
  activeGeolocation: undefined,
  arrayGeolocations: [],
  setActiveGeolocation: (geolocation: IGeolocation) => set(() => ({ activeGeolocation: geolocation })),
  setArrayGeolocations: (geolocations: IGeolocation[]) => set(() => ({ arrayGeolocations: geolocations})),
}))

