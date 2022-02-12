import React from "react";
import Search from "../Components/Search";
import Weather from "../Components/Weather";

export default function WheatherMain(props) {
  const { data, display, setdisplay, onChangeFn, searchFn, form } = props;
  return (
    <div id="main_container">
      <h1 id="title">Weather</h1>
      {display.display ? (
        <Weather
          data={data}
          display={display}
          form={form}
          setdisplay={setdisplay}
        />
      ) : (
        <Search onChangeFn={onChangeFn} searchFn={searchFn} />
      )}
    </div>
  );
}
