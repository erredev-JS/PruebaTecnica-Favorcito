import axios from "axios";
import type { IGeolocation } from "../types/IGeolocation";
import type { IGeoApiResponse } from "../types/IGeoApiResponse";

const BASE_URL = "https://geocoding-api.open-meteo.com/v1/search";

// Usando searchParams podemos hacer mas mantenible la consulta.


export const getCoordinatesByCountry = async (countryName: string): Promise<IGeolocation[]> => {
  try {
    const params = new URLSearchParams({
      name: countryName,
      count: "10",
      language: "es",
      format: "json"
    });

    const response = await axios.get<IGeoApiResponse>(`${BASE_URL}?${params}`);
    return response.data.results ?? [];
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    return [];
  }
};
