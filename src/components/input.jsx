import React from "react";
import { useWeather } from "../context";

export const Input_box = (props) => {
    const weather = useWeather();
  return (
    <div>
      <input
      onKeyDown={e => {
        if(e.key === "Enter") {
          {props.onKeyDown()}
        }
      }}
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
