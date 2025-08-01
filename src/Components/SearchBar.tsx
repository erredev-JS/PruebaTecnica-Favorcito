import { useEffect, useState, type ChangeEvent, type ReactEventHandler } from "react";
import { getCoordinatesByCountry } from "../Cruds/geoCrud";
import type { IGeolocation } from "../types/IGeolocation";
import { LocationCard } from "./LocationCard";
import { useStoreGeolocation } from "../store/storeGeolocation";

export const SearchBar = () => {
 



    const {arrayGeolocations, setArrayGeolocations ,searchGeolocation, setSearch} = useStoreGeolocation()

   useEffect(() => {
    if (searchGeolocation.length < 3) {
      setArrayGeolocations([]);
      return;
    }

    const delayDebounce = setTimeout(async () => {
      const response = await getCoordinatesByCountry(searchGeolocation);
      console.log(response)
      setArrayGeolocations(response);
    }, 500); // 500ms de debounce

    return () => clearTimeout(delayDebounce); // limpia el timeout si cambia `search`
  }, [searchGeolocation]);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = async () => {
    const response = await getCoordinatesByCountry(searchGeolocation);
    console.log(response)
    setArrayGeolocations(response);
  };

  return (
    <div className="flex items-center rounded-2xl overflow-hidden">
        <div className="flex  flex-col justify-center items-center">
      <input type="text" placeholder="Mendoza" className="bg-white border-r-2 px-2 relative" onChange={(e) => handleChange(e)} />
      {arrayGeolocations.length > 0 && 
      <ul className="bg-white absolute top-10  rounded  z-10 h-[300px] overflow-auto">
        {arrayGeolocations.map((location, index) => <LocationCard key={index} location={location}/>)}
      </ul>
      
      }
        </div>
      <button className="bg-blue-600 cursor-pointer" onClick={() => handleSearch()}>
        <img src="./svg/search.svg" alt="" />
      </button>
    </div>
  );
};
