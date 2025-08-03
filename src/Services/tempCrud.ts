import axios from "axios";
import type { IWeatherResponse } from "../types/IWeatherResponse";
import { useStoreWeather } from "../store/storeWeather";

const BASE_URL = "https://api.open-meteo.com/v1/forecast";

const EXTRAS = {
  hourly: "temperature_2m",
  current: "is_day,temperature_2m,rain,wind_speed_10m,apparent_temperature,relative_humidity_2m,precipitation,cloud_cover",
  daily: "temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max,sunrise,sunset",
  timezone: "auto",
};

// 🔧 Función para obtener fechas en formato YYYY-MM-DD
const getDateRange = (days: number) => {
  const today = new Date();
  const end = new Date();
  end.setDate(today.getDate() + (days - 1));

  const format = (date: Date) => date.toISOString().split("T")[0];

  return {
    start_date: format(today),
    end_date: format(end),
  };
};

export const getTempByLatAndLong = async (lat: number, long: number): Promise<IWeatherResponse> => {
  const setLoading = useStoreWeather.getState().setLoadingWeather;

  const { start_date, end_date } = getDateRange(7); // próximo 7 días

  try {
    setLoading(true);

    const params = new URLSearchParams({
      latitude: lat.toString(),
      longitude: long.toString(),
      hourly: EXTRAS.hourly,
      current: EXTRAS.current,
      daily: EXTRAS.daily,
      timezone: EXTRAS.timezone,
      start_date,
      end_date,
    });

    const response = await axios.get<IWeatherResponse>(`${BASE_URL}?${params}`);

    return response.data;
  } catch (error) {
    console.error("Error al obtener el clima:", error);

    throw new Error("No se pudo obtener el clima.");
  } finally {
    setLoading(false);
  }
};
