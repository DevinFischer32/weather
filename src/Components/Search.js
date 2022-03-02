import searchIcon from "../Icons/search.png";
export default function Search(props) {
  const { onChangeFn, searchFn, form } = props;
  return (
    <>
      <form id="form">
        <input
          autoComplete="off"
          className="searchInput font_m"
          type="text"
          name="city"
          value={form.city}
          placeholder="City"
          onChange={onChangeFn}
        />

        <input
          autoComplete="off"
          className="searchInput font_m"
          type="text"
          name="country"
          value={form.country}
          placeholder="Country"
          onChange={onChangeFn}
        />

        <button id="submit_btn" onClick={searchFn}>
          <img id="searchIcon" src={searchIcon} alt="" />
        </button>
      </form>
    </>
  );
}
