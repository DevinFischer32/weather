import React from "react";
import fahrenheit from "../Icons/fahrenheit.png";
import celsius from "../Icons/celsius.png";

export default function Weather(props) {
  const { display, weatherData, form } = props;
  let val = Math.floor(weatherData.wind.deg / 45 + 0.5);
  let compass = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  let direction = compass[val % 8];

  return (
    <div className="weather_container">
      <div id="icon_temp_container">
        <div id="container">
          <div id="icon_div">
            <img
              id="weatherIcon"
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt=""
            />
          </div>
          <div id="temp_now_div" className="font_xl">
            {Math.round(weatherData.main.temp)}
            <img
              id="temp"
              src={form.temperature ? `${fahrenheit}` : `${celsius}`}
              alt=""
            />
          </div>
        </div>
      </div>
      <div id="top_right">
        <h2 className="font_l">
          {display.city}, {display.country}
        </h2>

        <h2 className="font_m">{weatherData.weather[0].main}</h2>
      </div>
      <div id="bottom_left_div">
        <div className="font_s">
          <h5 className="phoneMediafs">
            {" "}
            Feels Like : {Math.round(weatherData.main.feels_like)}
          </h5>
          <h5 className="phoneMediafs">
            {" "}
            Today's Min : {Math.round(weatherData.main.temp_min)}
          </h5>
          <div className="phoneMediafs">
            <h1>Today's Max :</h1>
            <h1>{Math.round(weatherData.main.temp_max)}</h1>
          </div>
        </div>
      </div>
      <div id="bottom_right_div">
        <div className="font_s">
          <h5 className="phoneMediafs">
            Humidity : {weatherData.main.humidity} %{" "}
          </h5>
          <h5 className="phoneMediafs">
            {weatherData.wind.speed === 0
              ? "Wind : 0 mph"
              : `Wind : ${Math.round(weatherData.wind.speed)} mph ${direction}`}
          </h5>
        </div>
      </div>
    </div>
  );
}
