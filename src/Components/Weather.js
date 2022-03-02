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
      <section id="top-left-section">
        <div id="weatherTypeIconDiv">
          <img
            id="weatherIcon"
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt=""
          />
        </div>
        <div id="temperature-icon-div">
          <p className="font_xl">{Math.round(weatherData.main.temp)}</p>
          <img
            id="temperatureIcon"
            src={form.temperature ? `${fahrenheit}` : `${celsius}`}
            alt=""
          />
        </div>
      </section>

      <section id="cityCountrySection">
        <p className="font_l" id="cityCountryP">
          {display.city}, {display.country}
        </p>
        <p className="font_m">{weatherData.weather[0].main}</p>
      </section>

      <section className="font_m bottomSection">
        <div className="flex-spaceBetween">
          <p> Feels Like : </p>
          <p> {Math.round(weatherData.main.feels_like)}</p>
        </div>
        <div className="flex-spaceBetween">
          <p> Today's Min : </p>
          <p> {Math.round(weatherData.main.temp_min)}</p>
        </div>
        <div className="flex-spaceBetween">
          <p>Today's Max :</p>
          <p>{Math.round(weatherData.main.temp_max)}</p>
        </div>
      </section>

      <section className="font_m bottomSection">
        <div className="flex-spaceBetween">
          <p>Humidity :</p>
          <p> {weatherData.main.humidity} % </p>
        </div>

        {weatherData.wind.speed === 0 ? (
          <div className="flex-spaceBetween">
            <p>Wind :</p>
            <p>0 mph</p>
          </div>
        ) : (
          <div className="flex-spaceBetween">
            <p>Wind :</p>
            <p>{`${Math.round(weatherData.wind.speed)} mph ${direction}`}</p>
          </div>
        )}
      </section>
    </div>
  );
}
