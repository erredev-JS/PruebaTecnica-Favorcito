import { Forecast } from "../Components/Forecast/Forecast";
import { Header } from "../Components/Header/Header";
import { TempHero } from "../Components/TempHero/TempHero";
import { useStoreWeather } from "../store/storeWeather";

export const MainScreen = () => {
  const { activeWeather, firstSearch } = useStoreWeather();
  const isDay = activeWeather?.current.is_day;
  const nightBackground = "bg-gradient-to-b from-gray-900 to-gray-600";
  const dayBackground = "bg-gradient-to-b from-sky-400 to-sky-200";

  return (
    <div className={`min-h-[100vh] ${isDay ? dayBackground : nightBackground}`}>
      <Header />

      {!firstSearch ? (
        <h1 className="mt-8 text-center text-4xl text-white font-bold">Realiza una primer búsqueda</h1>
      ) : (
        <>
          <TempHero />
          <Forecast />
        </>
      )}
    </div>
  );
};
