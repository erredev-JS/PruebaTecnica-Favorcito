import { useEffect, useState } from "react";
import { useStoreGeolocation } from "../../store/storeGeolocation";
import { getTempByLatAndLong } from "../../Services/tempCrud";
import { useStoreWeather } from "../../store/storeWeather";
import { Loading } from "../Loading/Loading";
import { formatHour, getImgSelectedWeatherState } from "../../utils/utils";
import type { IHourlyTemp } from "../../types/IHourlyTemp";
import { HourlyTempCard } from "./HourlyTempCard";

export const TempHero = () => {
  const [hourlyTemp, setHourlyTemp] = useState<IHourlyTemp[]>([]);
  const { activeGeolocation } = useStoreGeolocation();
  const { activeWeather, setActiveWeather, loadingWeather } = useStoreWeather();

  const searchTemp = async () => {
    if (activeGeolocation) {
      const response = await getTempByLatAndLong(activeGeolocation.latitude, activeGeolocation.longitude);
      // Solo actualizar si cambió
      if (JSON.stringify(response) !== JSON.stringify(activeWeather)) {
        setActiveWeather(response);
      }
    }
  };

  useEffect(() => {
    if (activeGeolocation) {
      searchTemp();
    }
  }, [activeGeolocation]);

  // Filtramos las horas para mostrar solo 5 puntos del día actual con salto de 6 horas
  const filterHourly = (): IHourlyTemp[] => {
    if (!activeWeather) return [];

    const firstAvailableDate = activeWeather.hourly.time[0].split("T")[0];

    const filtered = activeWeather.hourly.time
      .map((time: string, i: number) => ({
        time,
        hour: formatHour(time),
        temp: activeWeather.hourly.temperature_2m[i],
      }))
      .filter(({ time }) => time.startsWith(firstAvailableDate))
      .filter((_, index) => index % 6 === 0)
      .slice(0, 5);

    return filtered;
  };

  // Actualizamos hourlyTemp cada vez que cambie activeWeather
  useEffect(() => {
    setHourlyTemp(filterHourly());
  }, [activeWeather]);

  const { cloudCover, imgSelected } = getImgSelectedWeatherState(activeWeather);

  return (
    <>
      {loadingWeather ? (
        <Loading />
      ) : (
        <div className="h-[430px] w-8/10 max-w-[500px] min-w-[300px] m-auto mt-10 rounded-2xl shadow-2xl overflow-hidden text-white text-xl bg-gray-500/30 border py-2">
          <div className="w-full h-1/2 p-2 px-6">
            <div className="flex justify-between">
              <h1 className="font-bold">{`Tiempo en ${activeGeolocation?.name}`}</h1>
              <h1 className="font-bold">{activeGeolocation?.country}</h1>
            </div>
            <p className="text-2xl">
              Ahora <br /> <span className="font-black text-5xl">{activeWeather?.current.temperature_2m}º</span>
            </p>
            <p className="italic mt-1">Sensación térmica de: {activeWeather?.current.apparent_temperature}º</p>
            <p>Humedad: {activeWeather?.current.relative_humidity_2m}%</p>
          </div>
          <div className="flex gap-5 bg-gray-500/40 justify-between px-2">
            {hourlyTemp.map((hourlyData) => (
              <>
                <HourlyTempCard key={hourlyData.time} hourlyTemp={hourlyData} />
              </>
            ))}
          </div>
          <div className="h-1/2 flex text-center">
            <div className="h-full w-1/2 p-2 px-6">
              <img src={imgSelected} alt="" className="w-1/2 m-auto" />
              <p>{cloudCover}</p>
            </div>
            <div className="bg-black-500 h-full w-1/2 p-2 px-6">
              <img src="./svg/wind.svg" alt="" className="w-1/2 m-auto" />
              <p>Viento: {activeWeather?.current.wind_speed_10m} km/h</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
