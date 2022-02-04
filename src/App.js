import WheatherMain from "./Page/WheatherMain";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [city, setcity] = useState("");
  const [country, setcountry] = useState("");
  const [temperature, settemperature] = useState("imperial");
  const [data, setdata] = useState({});
  const [display, setdisplay] = useState(false);

  let cityFn = (e) => {
    setcity(e.target.value);
  };
  let countryFn = (e) => {
    setcountry(e.target.value);
  };
  let temperatureFn = (e) => {
    settemperature(e.target.value);
  };
  let searchFn = async (e) => {
    e.preventDefault();
    await axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=${temperature}&APPID=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setdata(res);
        setdisplay(true);
      });
  };
  return (
    <div className="App">
      <WheatherMain
        data={data}
        setdisplay={setdisplay}
        display={display}
        temperature={temperature}
        cityFn={cityFn}
        countryFn={countryFn}
        temperatureFn={temperatureFn}
        searchFn={searchFn}
      />
    </div>
  );
}

export default App;
