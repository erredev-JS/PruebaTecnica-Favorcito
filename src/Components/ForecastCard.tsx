import type { FC } from "react"
import type { IForecast } from "../types/IForecast"
import { TemperatureIcon } from "./TemperatureIcon"
import { clasificarTemperatura } from "../utils/utils"

interface Props {
    location: IForecast
}
export const ForecastCard: FC<Props> = ({location}) => {
    const date = location.date
    const dateObj = new Date(date)

    // Lo transformamos a dia de la semana en español

    const weekDay = dateObj.toLocaleDateString("es-AR", {weekday: "long"})
    let weekDayTransformed = weekDay[0].toUpperCase() + weekDay.slice(1)

    const mediaTemp = (location.temperature_2m_min + location.temperature_2m_max) / 2

  let tempString = clasificarTemperatura(mediaTemp);

  
 

  return (
    <div className="bg-white/70 w-full rounded-2xl px-3 py-2 shadow max-w-[600px] m-auto">
        <div className="flex justify-between border-b-2">
        <p>{weekDayTransformed}</p>
        <p>{location.date}</p>
        </div>
        <div className="flex justify-between items-center">

        <div>
        <p>Temperatura maxima: {location.temperature_2m_max}º</p>
        <p>Temperatura minima: {location.temperature_2m_min}º</p>
        <p>Precipitación acumulada: {location.precipitation_sum}mm</p>
        <p>Velocidad maxima de viento: {location.windspeed_10m_max}km/h</p>
        </div>
        <TemperatureIcon tipo={tempString}/>
        </div>
    </div>
  )
}
