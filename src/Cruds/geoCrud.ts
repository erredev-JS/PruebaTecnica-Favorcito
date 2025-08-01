import axios from "axios"
import type { IGeolocation } from "../types/IGeolocation"
import type { IGeoApiResponse } from "../types/IGeoApiResponse"

const BASE_URL = 'https://geocoding-api.open-meteo.com/v1/search?'

// name=Mendoza&count=10&language=en&format=json
export const getCoordinatesByCountry = async (countryName: string): Promise<IGeolocation[]> => {
    const response = await axios.get<IGeoApiResponse>(`${BASE_URL}name=${countryName}&count=10&language=es&format=json`)
    return response.data.results
}