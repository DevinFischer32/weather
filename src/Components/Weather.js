import React from "react";
import f from "../Icons/fahrenheit.png";
import c from "../Icons/celsius.png";

export default function Weather(props) {
  const { setdisplay, display, data, form } = props;
  let val = Math.floor(data.current.wind_deg / 45 + 0.5);
  let compass = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  let direction = compass[val % 8];

  console.log(data);
  return (
    <div className="weather_container">
      <h1>
        {display.city}, {display.country}
      </h1>
      <img
        src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`}
        alt=""
      />

      <h2>{`Temperature Now: ${Math.round(data.current.temp)} ${
        form.temperature === "imperial" ? (
          <img className="temp" src={f} alt="" />
        ) : (
          <img className="temp" src={c} alt="" />
        )
      }`}</h2>

      <h2>Humidity : {data.current.humidity}% </h2>

      <h2>
        {data.current.wind_speed === 0
          ? "Wind : 0 mph"
          : `Wind : ${Math.round(data.current.wind_speed)} mph ${direction}`}
      </h2>

      <h2>{data.current.weather[0].main}</h2>
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setdisplay(!display.display);
          }}
        >
          Search New City
        </button>
      </div>
    </div>
  );
}
