import axios from "axios"
import type { IWeatherResponse } from "../types/IWeatherResponse"

const BASE_URL = 'https://api.open-meteo.com/v1/forecast?'


const EXTRAS = 'hourly=temperature_2m&current=is_day,temperature_2m,rain,wind_speed_10m,apparent_temperature,relative_humidity_2m,precipitation,cloud_cover'


export const getTempByLatAndLong = async (lat: number, long: number): Promise<IWeatherResponse> => {
    const response = await axios.get<IWeatherResponse>(`${BASE_URL}latitude=${lat}&longitude=${long}&${EXTRAS}`)
    return response.data
}