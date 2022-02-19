import React, { useState, useEffect } from "react";
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
  const [time, setTime] = useState({
    sec: null,
    min: null,
    hour: null,
  });
  const [data, setdata] = useState([]);

  let ticking = () => {
    if (time.hour !== null) {
      if (time.sec < 59 && time.min < 59) {
        setTime((state) => ({
          ...state,
          sec: time.sec + 1,
        }));
      } else if (time.sec > 58 && time.min < 59) {
        setTime((state) => ({
          ...state,
          min: time.min + 1,
          sec: 0,
        }));
      } else if (time.sec > 58 && time.min > 58) {
        setTime({
          hour: time.hour + 1,
          min: 0,
          sec: 0,
        });
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      ticking();
    }, 1000);
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
        setdata(res.data);
        setdisplay({
          city: res.data.name,
          country: res.data.sys.country,
          display: true,
        });
      })

      .then((res) => {
        axios
          .get(
            `https://timezone.abstractapi.com/v1/current_time/?api_key=${process.env.REACT_APP_TIME_API_KEY}&location=${display.city}, ${display.country}`
          )
          .then((res) => {
            const time = res.data.datetime.split("").slice(11).join(" ");
            const joinedTime = time.replace(/:/g, "").replace(/ /g, "");

            setTime({
              sec: parseInt(joinedTime.slice(4, 6)),
              min: parseInt(joinedTime.slice(2, 4)),
              hour: parseInt(joinedTime.slice(0, 2)),
            });
          });
      });
  };

  return (
    <div className="App">
      <WeatherMain
        data={data}
        display={display}
        time={time}
        form={form}
        setForm={setForm}
        onChangeFn={onChangeFn}
        searchFn={searchFn}
      />
    </div>
  );
}

export default App;
