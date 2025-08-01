import { useEffect } from "react";
import { useStoreGeolocation } from "../store/storeGeolocation";
import { getTempByLatAndLong } from "../Cruds/tempCrud";
import { useStoreWeather } from "../store/storeWeather";

export const TempHero = () => {
  const { activeGeolocation } = useStoreGeolocation();
  const {activeWeather, setActiveWeather} = useStoreWeather()
  const searchTemp = async () => {
    if (activeGeolocation) {
      const response = await getTempByLatAndLong(activeGeolocation?.latitude, activeGeolocation?.longitude);
      console.log(response)
      setActiveWeather(response)
    }
  };
let cloudCover = "";

if (activeWeather?.current?.cloud_cover !== undefined) {
  const cover = activeWeather.current.cloud_cover;
  if (cover > 75) {
    cloudCover = "Mayormente nublado";
  } else if (cover > 50) {
    cloudCover = "Parcialmente nublado";
  } else if (cover > 20) {
    cloudCover = "Parcialmente despejado";
  } else {
    cloudCover = "Despejado";
  }
}


  useEffect(() => {
    searchTemp();
  }, [activeGeolocation]);
  return (
    <div className="h-[400px] w-[350px]  m-auto mt-10 rounded-2xl shadow-2xl overflow-hidden text-white text-xl">
      <div className="bg-green-400 w-full h-1/2 p-2">
      <div className="flex justify-between">
      <h1 className="font-bold">Tiempo en Mendoza</h1>
        <h1 className="font-bold">{activeGeolocation?.country}</h1>
      </div>
    <p className="text-2xl">Ahora <br /> <span className="font-black">{activeWeather?.current.temperature_2m}º</span></p>
    <p>Sensación térmica de: {activeWeather?.current.apparent_temperature}</p>
      </div>
      <div className="h-1/2 flex">
        <div className="bg-red-300 h-full w-1/2 px-2">
            <p>{cloudCover}</p>
    </div>
        <div className="bg-red-500 h-full w-1/2"></div>
      </div>
    </div>
  );
};
