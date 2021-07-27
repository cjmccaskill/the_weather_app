import React from "react";

const WeatherReport = ({ weather }) => {
  const loaded = () => {
    let lowTemp = Math.floor(weather.main?.temp_min);
    let highTemp = Math.floor(weather.main?.temp_max);
    let currentTemp = Math.floor(weather.main?.temp);
    if (currentTemp > 90) {
      currentTemp = <h1 style={{ color: "red" }}>{currentTemp}</h1>;
    } else if (currentTemp < 40) {
      currentTemp = <h1 style={{ color: "lightblue" }}>{currentTemp}</h1>;
    } else {
      currentTemp = <h1>{currentTemp}</h1>;
    }

    return (
      <div>
        <h2 className="city">{weather.name}</h2>
        <h1 className="current-temp">{currentTemp}</h1>
        <div className="weather-info">{weather.weather[0].description}</div>
        {/* <img src/> */}
        <div className="temps">
          <div className="low-temp">Today's low: {lowTemp}</div>
          <div className="high-temp">Today's high: {highTemp}</div>
        </div>
      </div>
    );
  };

  const loading = () => {
    return <h1>This broadcast has ended.</h1>;
  };
  return weather.weather ? loaded() : loading();
};

export default WeatherReport;
