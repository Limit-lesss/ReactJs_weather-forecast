const baseUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

export const WeatherApi = async (city) => {
  const response = await fetch(
    `${baseUrl}&q=${city}&appid=${process.env.REACT_APP_API}`
  );
  return await response.json();
};
export const WeatherApiForCurrentLoc = async (lat,lon) => {
  const response = await fetch(
    `${baseUrl}&lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API}`
  );
  return await response.json();
};
