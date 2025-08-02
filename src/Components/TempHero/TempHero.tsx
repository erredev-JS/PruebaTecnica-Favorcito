import { useEffect } from "react";
import { useStoreGeolocation } from "../../store/storeGeolocation";
import { getTempByLatAndLong } from "../../Cruds/tempCrud";
import { useStoreWeather } from "../../store/storeWeather";
import { Loading } from "../Loading/Loading";
import { getImgSelectedWeatherState } from "../../utils/utils";

export const TempHero = () => {
  const { activeGeolocation } = useStoreGeolocation();
  const { activeWeather, setActiveWeather, loadingWeather } = useStoreWeather();

  const searchTemp = async () => {
    if (activeGeolocation) {
      const response = await getTempByLatAndLong(activeGeolocation?.latitude, activeGeolocation?.longitude);
      if (JSON.stringify(response) !== JSON.stringify(activeWeather)) {
        setActiveWeather(response);
      }
      setActiveWeather(response);
    }
  };

  useEffect(() => {
    if (activeGeolocation) {
      searchTemp();
    }
  }, [activeGeolocation]);

  const { cloudCover, imgSelected } = getImgSelectedWeatherState(activeWeather);

  return (
    <>
      {loadingWeather ? (
        <Loading />
      ) : (
        <div className="h-[400px] w-[500px]   m-auto mt-10 rounded-2xl shadow-2xl overflow-hidden text-white text-xl bg-gray-500/30 border">
          <div className=" w-full h-1/2 p-2 px-6 ">
            <div className="flex justify-between">
              <h1 className="font-bold">{`Tiempo en ${activeGeolocation?.name}`}</h1>
              <h1 className="font-bold">{activeGeolocation?.country}</h1>
            </div>
            <p className="text-2xl">
              Ahora <br /> <span className="font-black text-5xl">{activeWeather?.current.temperature_2m}º</span>
            </p>
            <p className="italic mt-1">Sensación térmica de: {activeWeather?.current.apparent_temperature}º</p>
          </div>
          <div className="h-1/2 flex  text-center">
            <div className=" h-full w-1/2 p-2 px-6 ">
              <img src={imgSelected} alt="" className="w-1/2 m-auto" />
              <p>{cloudCover}</p>
              <p>Humedad: {activeWeather?.current.relative_humidity_2m}%</p>
            </div>
            <div className="bg-black-500 h-full w-1/2 p-2 px-6 ">
              <img src="/svg/wind.svg" alt="" className="w-1/2 m-auto" />
              <p>Viento: {activeWeather?.current.wind_speed_10m} km/h</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
