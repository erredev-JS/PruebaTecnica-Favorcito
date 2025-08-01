import { useState } from "react";
import { useStoreGeolocation } from "../store/storeGeolocation";
import { useStoreWeather } from "../store/storeWeather";
import type { IWeatherResponse } from "../types/IWeatherResponse";
import type { IForecast } from "../types/IForecast";


export const Forecast = () => {

    const { activeGeolocation } = useStoreGeolocation();
    const { activeWeather } = useStoreWeather();

    const [arrayForecast, setArrayForecast] = useState<IForecast[]>([])


    setArrayForecast(activeWeather?.daily.)
  return (
    <div>Forecast</div>
  )
}
