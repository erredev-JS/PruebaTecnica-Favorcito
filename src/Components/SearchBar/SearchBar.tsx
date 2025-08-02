import { useEffect, type ChangeEvent, type FormEvent } from "react";
import { getCoordinatesByCountry } from "../../Cruds/geoCrud";
import { LocationCard } from "./LocationCard";
import { useStoreGeolocation } from "../../store/storeGeolocation";
import { useStoreWeather } from "../../store/storeWeather";
import Swal from "sweetalert2";

export const SearchBar = () => {
  const { arrayGeolocations, setArrayGeolocations, searchGeolocation, setSearch, setActiveGeolocation } = useStoreGeolocation();
  const { setFirstSearch } = useStoreWeather();
  useEffect(() => {
    if (searchGeolocation.length < 3 || searchGeolocation === "") {
      setArrayGeolocations([]);
      return;
    }

    const delayDebounce = setTimeout(async () => {
      const response = await getCoordinatesByCountry(searchGeolocation);
      setArrayGeolocations(response);
    }, 500); // 500ms de debounce

    return () => clearTimeout(delayDebounce); // limpia el timeout si cambia `search`
  }, [searchGeolocation]);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await getCoordinatesByCountry(searchGeolocation);
    if (response.length > 0) {
      setActiveGeolocation(response[0]);
      setFirstSearch(true);
    } else {
      Swal.fire({
        title: "Error al obtener el clima",
        text: "Error al obtener el clima, probablemente el lugar no existe.",
        icon: "error",
      });
    }
    setArrayGeolocations([]);
    setSearch("");
  };

  return (
    <div className="flex items-center rounded-2xl overflow-hidden">
      <form className="flex  flex-row justify-center items-center" onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Buscar ciudad/país..." className="bg-white px-2 py-1 relative select-none focus:outline-none" value={searchGeolocation} onChange={(e) => handleChange(e)} />
        {arrayGeolocations.length > 1 && (
          <ul className="bg-white absolute top-10  rounded  z-10 h-[300px] overflow-auto">
            {arrayGeolocations.map((location, index) => (
              <LocationCard key={index} location={location} />
            ))}
          </ul>
        )}
        <button className="bg-blue-600 cursor-pointer py-1 px-2  hover:bg-blue-300" type="submit">
          <img src="./svg/search.svg" alt="" />
        </button>
      </form>
    </div>
  );
};
