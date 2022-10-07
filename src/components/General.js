import React, { useContext } from "react";
import COUNTRIES from "./Countries.js";
import { LIGHT_DARK, COUNTRY_LIST } from "../App";
import HEADER from "./Header.js";
// import { SELECT_CONTINENT } from "../App";

const GENERAL = () => {
  const { dark } = useContext(LIGHT_DARK);
  const { search, selectedContinent, setSearch, setSelectedContinent } =
    useContext(COUNTRY_LIST)
  // const [my_search, setMy_search] = useState("");
  // const [search_empty, setSearch_empty] = useState(true);
  // const {select_continent, setSelect_continent} = useContext(SELECT_CONTINENT);

  // const [select_continent, setSelect_continent] = useState("all");

  // useEffect(() => {
  //   if (search.trim() === "") {
  //     setSearch_empty(true);
  //   } else {
  //     setSearch_empty(false);
  //   }

  //   // console.log(search_empty)
  //   // console.log(my_search.trim())
  // });

  function orderDigits(e) {
    if (e.target.value.match("a-zA-Z")) {
      setSearch(e.target.value);
    } else {
      console.log("wrong entry");
      console.log(e.target.value);
      // return setMy_search(my_search.substring(0, my_search.length-1))
    }
  }

  return (
    <div className="main-body">
      <div className="search_container">
        <div
          className={
            dark ? "night_header search_item" : "light_header search_item"
          }
        >
          <img
            alt="search"
            src={
              dark
                ? require("../media/search-light.png")
                : require("../media/search-dark.png")
            }
          />
          <input
            type={"text"}
            placeholder="search for any country..."
            className={dark ? "night_header " : "light_header"}
            onChange={(e) => {
              //** Fix your regular expression, it is wrong!!!!!!!!!!!!*/
              if (e.target.value.match("a-zA-Z+")) {
                setSearch(e.target.value)
              }
              // setMy_search(e.target.value);
              //   orderDigits(e)
            }}
            name="my_search"
            value={search}
          />
        </div>
        <div>{search}{selectedContinent}</div>
        <div>
          <select
            className={
              dark ? "night_header search_item" : "light_header search_item"
            }
            onChange={(e) => {
              return setSelectedContinent(e.target.value);
            }}
          >
            <option value={"all"}>Filter by Region</option>
            <option value={"Africa"}>Africa</option>
            <option value={"America"}>America</option>
            <option value={"Asia"}>Asia</option>
            <option value={"Europe"}>Europe</option>
            <option value={"Oceania"}>Oceania</option>
          </select>
        </div>
      </div>

      {/* use an if condition for this */}
      <div className="country_display_style">
        {/* {search_empty ? <COUNTRIES select_continent={select_continent} my_search={my_search}/> : <HEADER />} */}
        <COUNTRIES />
      </div>
    </div>
  );
};

export default GENERAL;
