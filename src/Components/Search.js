import searchIcon from "../Icons/search.png";
export default function Search(props) {
  const { onChangeFn, searchFn } = props;
  return (
    <>
      <div>
        <form id="form">
          <input
            autoComplete="off"
            className="sinput"
            type="text"
            name="city"
            placeholder="City"
            onChange={onChangeFn}
          />
          <input
            autoComplete="off"
            className="sinput"
            type="text"
            name="country"
            placeholder="State/Country"
            onChange={onChangeFn}
          />
          {/* <div id="stack">
            <label htmlFor="temperature">
              <input
                type="radio"
                value="imperial"
                name="temperature"
                onChange={onChangeFn}
              />
              Fahrenheit
            </label>
            <label htmlFor="temperature">
              <input
                type="radio"
                value="metric"
                name="temperature"
                onChange={onChangeFn}
              />
              Celsius
            </label>
          </div> */}
          <button id="submit_btn" onClick={searchFn}>
            <img id="searchIcon" src={searchIcon} alt="" />
          </button>
        </form>
      </div>
    </>
  );
}
