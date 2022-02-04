import React from "react";
import Search from "../Components/Search";
import Weather from "../Components/Weather";

export default function WheatherMain(props) {
  const {
    data,
    display,
    setdisplay,
    cityFn,
    countryFn,
    temperatureFn,
    searchFn,
    temperature,
  } = props;
  return (
    <div>
      <h1>The Weather App</h1>
      {display ? (
        <Weather
          data={data}
          setdisplay={setdisplay}
          display={display}
          temperature={temperature}
        />
      ) : (
        <Search
          cityFn={cityFn}
          countryFn={countryFn}
          temperatureFn={temperatureFn}
          searchFn={searchFn}
        />
      )}
    </div>
  );
}
