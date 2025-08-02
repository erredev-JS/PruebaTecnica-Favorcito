import { Forecast } from "../Components/Forecast";
import { Header } from "../Components/Header";
import { Loading } from "../Components/Loading";
import { TempHero } from "../Components/TempHero";
import { useStoreWeather } from "../store/storeWeather";

export const MainScreen = () => {
  const { activeWeather, firstSearch, loadingWeather } = useStoreWeather();
  const isDay = activeWeather?.current.is_day;
  const nightBackground = "bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r";
  const dayBackground = "bg-gradient-to-b from-sky-400 to-sky-200";
  const shouldShowWeather = !loadingWeather && firstSearch;

  return (
    <div className={`min-h-[100vh] ${isDay ? dayBackground : nightBackground}`}>
      <Header />
 
        {!firstSearch ?  <h1 className="mt-8 text-center text-4xl text-white font-bold">
          Realiza una primer búsqueda
        </h1> : (
        <>
          <TempHero />
          <Forecast />
        </>
        )}
       

     
   
    </div>
  );
};
