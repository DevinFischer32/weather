export default function Search(props) {
  const { cityFn, countryFn, temperatureFn, searchFn } = props;
  return (
    <>
      <div>
        <form>
          <input type="text" placeholder="City/Location" onChange={cityFn} />
          <input type="text" placeholder="Country" onChange={countryFn} />
          <div>
            <input
              type="radio"
              value="imperial"
              name="Temperature"
              onChange={temperatureFn}
            />
            Fahrenheit
            <input
              type="radio"
              value="metric"
              name="Temperature"
              onChange={temperatureFn}
            />
            Celsius
          </div>
          <button onClick={searchFn}>Search</button>
        </form>
      </div>
    </>
  );
}
