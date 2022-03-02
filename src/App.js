import React, { useState } from "react";
import Search from "./Components/Search";
import Weather from "./Components/Weather";
import axios from "axios";
import "./CSS/App.css";
import "./CSS/reset.css";

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [form, setForm] = useState({
    city: "",
    country: "",
    temperature: true,
  });
  const [display, setdisplay] = useState({
    city: "",
    country: "",
    loaded: false,
  });
  const onChangeFn = (e) => {
    const { value, name } = e.target;
    setForm((state) => ({
      ...state,
      [name]: value.replace(/^\s+|\s+$/gm, ""),
    }));
  };

  let searchFn = async (e) => {
    e.preventDefault();
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setWeatherData(res.data);
        setdisplay({
          city: res.data.name,
          country: res.data.sys.country,
          loaded: true,
        });
      });
    setForm({
      city: "",
      country: "",
      temperature: true,
    });
  };

  return (
    <div id="main_container">
      <h1 className="font_xl" id="weatherAppTitle">
        Weather App
      </h1>
      <Search onChangeFn={onChangeFn} searchFn={searchFn} form={form} />
      {display.loaded === true ? (
        <Weather
          weatherData={weatherData}
          display={display}
          form={form}
          setForm={setForm}
        />
      ) : (
        <div className="weather_container">
          <h1 id="weatherPlaceHolderText" className="font_m">
            Get the Current Weather of any City in the World!
          </h1>
        </div>
      )}
    </div>
  );
};

export default App;
