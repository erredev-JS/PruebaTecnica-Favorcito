import { Header } from "../Components/Header";
import { TempHero } from "../Components/TempHero";

export const MainScreen = () => {
  return (
    <div className="min-h-[100vh] bg-gray-700">
    <Header/>
    <TempHero/>
    </div>
  );
};