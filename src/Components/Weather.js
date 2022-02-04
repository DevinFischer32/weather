import React from "react";

export default function Weather(props) {
  const { setdisplay, display, data, temperature } = props;
  const info = data.data;
  console.log(data);

  var val = Math.floor(info.wind.deg / 22.5 + 0.5);
  var compass = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  let days = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
  ];
  let direction = compass[val % 16];
  const date = new Date();
  console.log(days[date.getDay()]);

  return (
    <div>
      <h1>
        {info.name}, {info.sys.country}
      </h1>

      <h2>{`Temperature Now: ${Math.round(info.main.temp)} ${
        temperature === "imperial" ? "\u2109" : "\u2103"
      }`}</h2>
      <h2>Humidity : {info.main.humidity}% </h2>
      <h2>
        Wind : {info.wind.speed} {direction} mph
      </h2>

      <h2>{info.weather[0].main}</h2>
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
