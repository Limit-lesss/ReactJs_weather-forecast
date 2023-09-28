import React, { useEffect } from 'react';
import { Input_box } from './input';
import { ButtonBox } from './button';
import { useWeather } from '../context';

export const Card = () => {
    const weather = useWeather();
    useEffect(() => {
        weather.fetchCurrentLocationData();
    },[])
    return(
        <div>
            <Input_box onKeyDown={weather.fetchData}/>
            <ButtonBox type="Search" onClick={weather.fetchData}/>
            <h3>Temp: {weather.data?.main?.temp}<sup>o</sup>C</h3>
            <h3>Location: {weather.data?.name},{weather.data?.sys?.country}</h3>
        </div>
    );
}