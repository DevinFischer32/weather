export default function Search(props) {
  const { onChangeFn, searchFn } = props;
  return (
    <>
      <div>
        <form>
          <input
            type="text"
            name="city"
            placeholder="City/Location"
            onChange={onChangeFn}
          />
          <input
            type="text"
            name="country"
            placeholder="State/Country"
            onChange={onChangeFn}
          />
          <div>
            <input
              type="radio"
              value="imperial"
              name="temperature"
              onChange={onChangeFn}
            />
            Fahrenheit
            <input
              type="radio"
              value="metric"
              name="temperature"
              onChange={onChangeFn}
            />
            Celsius
          </div>
          <button onClick={searchFn}>Search</button>
        </form>
      </div>
    </>
  );
}
