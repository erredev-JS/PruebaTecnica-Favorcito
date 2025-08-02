import { useEffect, useState } from "react";

import type { IForecast } from "../../types/IForecast";
import { useStoreWeather } from "../../store/storeWeather";
import { ForecastCard } from "./ForecastCard";


export const Forecast = () => {
  const { activeWeather, loadingWeather } = useStoreWeather();

  const [arrayForecast, setArrayForecast] = useState<IForecast[]>([]);

  const dailyWeather = activeWeather?.daily;

  const arrayMinTemp = dailyWeather?.temperature_2m_min;
  const arrayMaxTemp = dailyWeather?.temperature_2m_max;
  const arrayWindspeedMax = dailyWeather?.windspeed_10m_max;
  const arrayPrecipitationSum = dailyWeather?.precipitation_sum;
  const arrayDate = dailyWeather?.time;

  useEffect(() => {
    if (arrayMinTemp && arrayMaxTemp && arrayPrecipitationSum && arrayWindspeedMax && arrayDate) {
      let arrayForecast = [];
      for (let i = 0; i < arrayMinTemp?.length; i++) {
        arrayForecast.push({
          temperature_2m_min: arrayMinTemp[i],
          temperature_2m_max: arrayMaxTemp[i],
          windspeed_10m_max: arrayWindspeedMax[i],
          precipitation_sum: arrayPrecipitationSum[i],
          date: arrayDate[i],
        });
      }
      setArrayForecast(arrayForecast);
    }
  }, [arrayMinTemp, arrayMaxTemp, arrayPrecipitationSum, arrayWindspeedMax, arrayDate]);

  return (
    <>
      {!loadingWeather ? (
        <div className="m-auto w-8/10">
          <ul className="flex flex-col gap-4 mt-8 max-h-[400px] overflow-auto py-5">
            {arrayForecast?.map((location, index) => (
              <ForecastCard key={index} location={location} />
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
};
