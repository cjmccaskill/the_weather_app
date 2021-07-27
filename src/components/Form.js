import React from "react";

const Form = (props) => {
  const [weatherData, setWeatherData] = React.useState({ zipCode: "" });

  const handleChange = (e) => {
    setWeatherData({ ...weatherData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.getReport(weatherData.zipCode);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="zipCode"
          onChange={handleChange}
          value={weatherData.zipCode}
          placeholder="Enter Zip Code"
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

export default Form;
