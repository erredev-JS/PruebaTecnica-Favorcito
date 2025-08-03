import { useStoreWeather } from "../../store/storeWeather";
import { SearchBar } from "../SearchBar/SearchBar";

export const Header = () => {
   const { activeWeather } = useStoreWeather();
   const isDay = activeWeather?.current.is_day;
  return (
    <div className={ ` ${isDay && "bg-gray-500/30"} bg-black/20 h-[8vh] flex items-center  justify-between px-5 md:px-24`}>
      <h1 className="text-2xl text-white font-bold cursor-pointer">Weather.io</h1>
      <SearchBar />
    </div>
  );
};
