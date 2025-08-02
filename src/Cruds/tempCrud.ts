import axios from "axios";
import type { IWeatherResponse } from "../types/IWeatherResponse";
import { useStoreWeather } from "../store/storeWeather";

const BASE_URL = "https://api.open-meteo.com/v1/forecast";

// Usando searchParams podemos hacer mas mantenible la consulta.

const EXTRAS = {
  hourly: "temperature_2m",
  current: "is_day,temperature_2m,rain,wind_speed_10m,apparent_temperature,relative_humidity_2m,precipitation,cloud_cover",
  daily: "temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max,sunrise,sunset",
  timezone: "auto"
};

export const getTempByLatAndLong = async (
  lat: number,
  long: number
): Promise<IWeatherResponse> => {
  const setLoading = useStoreWeather.getState().setLoadingWeather
  try {
    setLoading(true)
    const params = new URLSearchParams({
      latitude: lat.toString(),
      longitude: long.toString(),
      hourly: EXTRAS.hourly,
      current: EXTRAS.current,
      daily: EXTRAS.daily,
      timezone: EXTRAS.timezone
    });

    const response = await axios.get<IWeatherResponse>(`${BASE_URL}?${params}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el clima:", error);
    throw new Error("No se pudo obtener el clima.");
  }finally {
    setLoading(false)
  }
};
