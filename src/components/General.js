import React, { useContext} from "react";
import COUNTRIES from "./Countries.js";
import { LIGHT_DARK, COUNTRY_LIST } from "../App";


const GENERAL = () => {
  const { dark } = useContext(LIGHT_DARK);
  const { search, setSearch, setSelectedContinent } =
    useContext(COUNTRY_LIST)



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
               setSearch(e.target.value);
            }}
            name="my_search"
            value={search}
          />
        </div>

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

      <div className="country_display_style">
        <COUNTRIES />
      </div>
    </div>
  );
};

export default GENERAL;