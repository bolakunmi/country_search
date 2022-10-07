import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { COUNTRY_LIST, LIGHT_DARK } from "../App";

const COUNTRY = () => {
  const { numericCode } = useParams();
  const {list} = useContext(COUNTRY_LIST);
  const {dark} = useContext(LIGHT_DARK)
  const selected = list.find((country) => {
    return country.numericCode.toString() === numericCode.toString();
  });

    return (
      <div className={dark ? " night_header country" : " light_header country"} key={selected.numericCode}>
        <h4>{selected.name}</h4>
        <p>population: {selected.population}</p>
        <p>region: {selected.region}</p>
        <p>capital: {selected.capital}</p>
      </div>
    );
  };


export default COUNTRY;
