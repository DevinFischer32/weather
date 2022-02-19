import React from "react";
import fahrenheit from "../Icons/fahrenheit.png";
import celsius from "../Icons/celsius.png";

export default function Weather(props) {
  const { display, data, form } = props;
  let val = Math.floor(data.wind.deg / 45 + 0.5);
  let compass = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  let direction = compass[val % 8];

  return (
    <div className="weather_container">
      <div className="flex">
        <img
          id="weatherIcon"
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt=""
        />
        <div id="temp_now_div">
          {Math.round(data.main.temp)}
          <img
            id="temp"
            src={form.temperature ? `${fahrenheit}` : `${celsius}`}
            alt=""
          />
        </div>
      </div>
      <div id="top_right">
        <h1 className="font_l">
          {display.city}, {display.country}
        </h1>

        <h2 className="font_m">{data.weather[0].main}</h2>
      </div>
      <div className="font_s center">
        <h2> Feels Like : {Math.round(data.main.feels_like)}</h2>
        <h2> Today's Min : {Math.round(data.main.temp_min)}</h2>
        <h2>Today's Max : {Math.round(data.main.temp_max)}</h2>
      </div>
      <div className="font_s center">
        <h2>Humidity : {data.main.humidity} % </h2>
        <h2>
          {data.wind.speed === 0
            ? "Wind : 0 mph"
            : `Wind : ${Math.round(data.wind.speed)} mph ${direction}`}
        </h2>
      </div>
    </div>
  );
}
