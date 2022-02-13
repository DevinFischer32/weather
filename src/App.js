import WheatherMain from "./Page/WheatherMain";
import React, { useState } from "react";
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
    display: false,
    city: "",
    country: "",
    localtime: "",
  });
  const [data, setdata] = useState([]);

  const onChangeFn = (e) => {
    const { value, name } = e.target;
    setForm((state) => ({
      ...state,
      [name]: value,
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
    // .then((res) => {
    //   axios
    //     .get(
    //       `https://timezone.abstractapi.com/v1/current_time/?api_key=${process.env.TIME_API_KEY}&location=${display.city}, ${display.country}`
    //     )
    //     .then((res) => {
    //       setdisplay((state) => ({
    //         ...state,
    //         display: true,

    //       }));
    //     });
    // });
  };
  return (
    <div className="App">
      <WheatherMain
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
