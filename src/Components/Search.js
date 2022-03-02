import searchIcon from "../Icons/search.png";
export default function Search(props) {
  const { onChangeFn, searchFn } = props;
  return (
    <>
      <form id="form">
        <input
          autoComplete="off"
          className="searchInput font_m"
          type="text"
          name="city"
          placeholder="City"
          onChange={onChangeFn}
        />

        <input
          autoComplete="off"
          className="searchInput font_m"
          type="text"
          name="country"
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
