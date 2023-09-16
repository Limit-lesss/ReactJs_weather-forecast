import { createContext, useContext, useState } from "react";
import { WeatherApi, WeatherApiForCurrentLoc } from "../api";

export const WeatherContext = createContext(null);

export const useWeather = () => {
    return useContext(WeatherContext);
}

export const WeatherProvider = (props) => {
    const [data, setData] = useState(null);
    const [searchCity, setSearchCity] =  useState("");
    const fetchData = async() => {
        const response = await WeatherApi(searchCity);
        setData(response);
    }
    const fetchCurrentLocationData = async() =>{
        navigator.geolocation.getCurrentPosition(
            (position) => {
                WeatherApiForCurrentLoc(position.coords.latitude,position.coords.longitude).then((data) => setData(data));
            }
        )
    }
    return (
        <WeatherContext.Provider value={{data , searchCity, setSearchCity, fetchData,fetchCurrentLocationData}}>
            {props.children}
        </WeatherContext.Provider>
    );
}