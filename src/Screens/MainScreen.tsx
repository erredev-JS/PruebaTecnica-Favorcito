import { Forecast } from "../Components/Forecast";
import { Header } from "../Components/Header";
import { TempHero } from "../Components/TempHero";
import { useStoreWeather } from "../store/storeWeather";

export const MainScreen = () => {
  const { activeWeather } = useStoreWeather();
  const isDay = activeWeather?.current.is_day
  const nightBackground = 'bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r'
  const dayBackground = 'bg-gradient-to-b from-sky-400 to-sky-200'
  return (
    <div className={`min-h-[100vh] ${isDay ? dayBackground : nightBackground}`}>
    <Header/>
    <TempHero/>
    <Forecast/>
    </div>
  );
};