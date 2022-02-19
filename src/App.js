import React, { useState } from "react";
import WeatherMain from "./Page/WeatherMain";
import axios from "axios";
import "./CSS/App.css";
import "./CSS/reset.css";

function App() {
  const [form, setForm] = useState({
    city: "",
    country: "",
    temperature: true,
  });
  const [display, setdisplay] = useState({
    city: "",
    country: "",
    display: false,
  });

  const [data, setdata] = useState([]);

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
        setdata(res.data);
        setdisplay({
          city: res.data.name,
          country: res.data.sys.country,
          display: true,
        });
      });
  };

  return (
    <div className="App">
      <WeatherMain
        data={data}
        display={display}
        form={form}
        setForm={setForm}
        onChangeFn={onChangeFn}
        searchFn={searchFn}
      />
    </div>
  );
}

export default App;
