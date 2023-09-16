import React from "react";
import { useWeather } from "../context";

export const Input_box = () => {
    const weather = useWeather();
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => {
          weather.setSearchCity(e.target.value);
        }}
        value={weather.searchCity}
        className="input-box"
      />
    </div>
  );
};
