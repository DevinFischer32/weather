import React, { useState, useEffect } from "react";
import WheatherMain from "./Page/WheatherMain";
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
        document.body.style.backgroundImage =
          "url('https://source.unsplash.com/1600x900/?" +
          form.city +
          " nature')";
        setdata(res.data);
        setdisplay({
          city: res.data.name,
          country: res.data.sys.country,
          display: true,
        });
      })
      .catch((error) => {
        alert(error);
      })
      .then((res) => {
        axios
          .get(
            `https://timezone.abstractapi.com/v1/current_time/?api_key=${process.env.REACT_APP_TIME_API_KEY}&location=${display.city}, ${display.country}`
          )
          .then((res) => {
            let t = res.data.datetime.split("").slice(11).join(" ");
            let lt = t.replace(/:/g, "").replace(/ /g, "");

            setTime({
              sec: parseInt(lt.slice(4, 6)),
              min: parseInt(lt.slice(2, 4)),
              hour: parseInt(lt.slice(0, 2)),
            });
          });
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="App">
      <WheatherMain
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
