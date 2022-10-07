import React, { useContext, useRef, useEffect } from "react";
import COUNTRIES from "./Countries.js";
import { LIGHT_DARK, COUNTRY_LIST } from "../App";

const SEARCH = () => {
  const { dark } = useContext(LIGHT_DARK);
  const {search, selectedContinent, setSearch, setSelectedContinent} = useContext(COUNTRY_LIST)

  const my_search_ref = useRef(null);

  function handleChange(e) {
    setSearch(e.target.value);
    console.log(e.target.value);
    console.log(e.target.value.length);
    // if it is zero, project the whole thing, else search for what you want
  }

  return (
    <React.Fragment>
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
            placeholder="search for any country"
            className={dark ? "night_header " : "light_header"}
            ref={my_search_ref}
            onChange={(e) => {
              handleChange(e);
            }}
            pattern= '[a-z]'
            name="my_search"
          />
        </div>
        <div>
          <select
            className={
              dark ? "night_header search_item" : "light_header search_item"
            }
            onChange={(e) => {setSelectedContinent(e.target.value); console.log(e.target.value)}}
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
      <div>this is what you are typing in the search engine: {search} </div>

      {/* use an if condition for this */}
      <COUNTRIES />
    </React.Fragment>
  );
};

export default SEARCH;
