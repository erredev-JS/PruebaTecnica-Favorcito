import React, { type FC } from 'react'
import type { IGeolocation } from '../types/IGeolocation'
import { useStoreGeolocation } from '../store/storeGeolocation'

interface Props {
    location: IGeolocation
}



export const LocationCard: FC<Props> = ({location}) => {
    const {setActiveGeolocation, setArrayGeolocations, setSearch} = useStoreGeolocation()

    const handleClick = () => {
        // En esta parte estamos seteando una nueva Geolocation que contiene altitud y latitud, con zustand, lo cual nos será util para renderizar el componente principal de la muestra de temperatura, setear el loading, etc.
        setActiveGeolocation(location)
        setArrayGeolocations([])
        setSearch("")
        
    }

  return (
   
        <li className="hover:bg-amber-100 h-fit w-full border-b-1 py-2 text-center" onClick={() => handleClick()}>{location.admin1}, {location.country}<br/>{location.latitude}, {location.longitude}</li>
        
  )
}
