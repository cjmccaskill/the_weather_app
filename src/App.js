import "./App.css";
import React from "react";
import Form from "./components/Form";
import WeatherReport from "./components/WeatherReport";

function App() {
  const apiKey = "b15ec60e1754221d78f6404dbd592b70";
  const [weatherData, setWeatherData] = React.useState({});

  const getReport = async (zipCode) => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=${apiKey}`
    );
    const json = await response.json();
    setWeatherData(json);
  };

  React.useEffect(() => {
    getReport("74074");
  }, []);

  return (
    <div className="App">
      <h1>The Weather App</h1>
      <hr />
      <Form getReport={getReport} />
      <WeatherReport weather={weatherData} />
    </div>
  );
}

export default App;
