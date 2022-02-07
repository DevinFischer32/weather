import WheatherMain from "./Page/WheatherMain";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [geo, setGeo] = useState({
    lon: 0,
    lat: 0,
  });
  const [form, setForm] = useState({
    city: "",
    country: "",
    temperature: "",
  });
  const [display, setdisplay] = useState({
    display: false,
    city: "",
    country: "",
  });
  const [data, setdata] = useState({});

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
        `https://maps.googleapis.com/maps/api/geocode/json?address=${form.city},+${form.country}&key=${process.env.GEOCODE}`
      )
      .then((res) => {
        console.log(res);
        setGeo({
          lon: res.data.results[0].geometry.location.lng,
          lat: res.data.results[0].geometry.location.lat,
        });

        setdisplay({
          city: res.data,
        });
      })
      .then((res) => {
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${geo.lat}&lon=${geo.lon}&units=${form.temperature}&appid=${process.env.REACT_APP_API_KEY}`
          )
          .then((res) => {
            setdata(res);
            setdisplay({ display: true });
          });
      });
  };
  return (
    <div className="App">
      <WheatherMain
        data={data}
        display={display}
        form={form}
        setdisplay={setdisplay}
        onChangeFn={onChangeFn}
        searchFn={searchFn}
      />
    </div>
  );
}

export default App;
