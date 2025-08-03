import type { IWeatherResponse } from "../types/IWeatherResponse";

export function clasificarTemperatura(temp: number): "fría" | "templada" | "cálida" {
  if (temp >= 25) return "cálida";
  if (temp >= 15) return "templada";
  return "fría";
}

export function getTodayAsString(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function getImgSelectedWeatherState(activeWeather: IWeatherResponse | undefined) {
  const isDay = activeWeather?.current.is_day;

  if (activeWeather?.current?.cloud_cover !== undefined) {
    const cover = activeWeather.current.cloud_cover;
    if (cover > 75) {
      return {
        cloudCover: "Mayormente nublado",
        imgSelected: "./svg/cloudy.svg",
      };
    } else if (cover > 50) {
      return {
        imgSelected: isDay ? "/svg/partlyCloudy.svg" : "./svg/cloudyMoon.svg",
        cloudCover: "Parcialmente nublado",
      };
    } else {
      return {
        imgSelected: isDay ? "./svg/sunny.svg" : "./svg/moon.svg",
        cloudCover: "Despejado",
      };
    }
  }

  // Por defecto, si no hay datos válidos
  return {
    cloudCover: "Sin información",
    imgSelected: "https://www.flaticon.com/free-icon/unknown_5978100",
  };
}