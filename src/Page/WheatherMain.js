import React from "react";
import Search from "../Components/Search";
import Weather from "../Components/Weather";

export default function WheatherMain(props) {
  const { data, display, onChangeFn, searchFn, form, setForm, time } = props;
  return (
    <div id="main_container">
      <h1 id="title">Weather</h1>
      <Search onChangeFn={onChangeFn} searchFn={searchFn} />
      {display.display === true ? (
        <Weather
          data={data}
          display={display}
          form={form}
          setForm={setForm}
          time={time}
        />
      ) : (
        <div>Get the Current Weather of any City in the World!</div>
      )}
    </div>
  );
}
