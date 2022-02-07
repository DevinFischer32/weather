import React from "react";

export default function Weather(props) {
  const { setdisplay, display, data, form } = props;
  console.log(data);

  let val = Math.floor(data.current.wind_deg / 45 + 0.5);
  let compass = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

  let direction = compass[val % 8];

  return (
    <div>
      <h1>
        {data.name}, {data.sys.country}
      </h1>

      <h2>{`Temperature Now: ${Math.round(data.main.temp)} ${
        form.temperature === "imperial" ? "\u2109" : "\u2103"
      }`}</h2>
      <h2>Humidity : {data.main.humidity}% </h2>
      <h2>
        Wind : {Math.round(data.current.wind_speed)} mph {direction}
      </h2>

      <h2>{data.weather[0].main}</h2>
      <div>
        <button
          onClick={(e) => {
            setdisplay(!display);
          }}
        >
          Search New City
        </button>
      </div>
    </div>
  );
}
