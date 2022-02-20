import React from "react";
import Weather from "../Components/Weather";
import Search from "../Components/Search";

export default function WheatherMain(props) {
  const { data, display, onChangeFn, searchFn, form, setForm } = props;
  return (
    <div id="main_container">
      <h1 className="font_xl" id="weather_title">
        Weather App
      </h1>
      <Search onChangeFn={onChangeFn} searchFn={searchFn} />
      {display.display === true ? (
        <Weather data={data} display={display} form={form} setForm={setForm} />
      ) : (
        <div className="weather_container">
          <h1 id="placeText" className="font_m">
            Get the Current Weather of any City in the World!
          </h1>
        </div>
      )}
    </div>
  );
}
