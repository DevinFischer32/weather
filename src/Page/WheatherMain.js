import React from "react";
import Search from "../Components/Search";
import Weather from "../Components/Weather";

export default function WheatherMain(props) {
  const { data, display, setdisplay, onChangeFn, searchFn, form } = props;
  return (
    <div>
      <h1>The Weather App</h1>
      {display ? (
        <Weather
          form={form}
          data={data}
          setdisplay={setdisplay}
          display={display}
        />
      ) : (
        <Search onChangeFn={onChangeFn} searchFn={searchFn} />
      )}
    </div>
  );
}
