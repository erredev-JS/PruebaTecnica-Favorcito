import React, { type FC } from "react";
import type { IGeolocation } from "../../types/IGeolocation";
import { useStoreGeolocation } from "../../store/storeGeolocation";
import { useStoreWeather } from "../../store/storeWeather";

interface Props {
  location: IGeolocation;
  actual?: boolean;
}

export const LocationCard: FC<Props> = ({ location, actual }) => {
  const { setActiveGeolocation, setArrayGeolocations, setSearch } = useStoreGeolocation();
  const { setFirstSearch } = useStoreWeather();

  const handleClick = () => {
    // En esta parte estamos seteando una nueva Geolocation que contiene altitud y latitud, con zustand, lo cual nos será util para renderizar el componente principal de la muestra de temperatura, setear el loading, etc.
    setActiveGeolocation(location);
    setArrayGeolocations([]);
    setSearch("");
    setFirstSearch(true);
  };

  return (
    <li className={`${actual ? "bg-transparent" : ""}hover:bg-amber-100 h-fit w-[260px] border-b-blue-200 border-b-3 py-2 text-center cursor-pointer`} onClick={() => handleClick()}>
      {location.name}, {location.country}
      <br />
      {location.latitude}, {location.longitude}
    </li>
  );
};
