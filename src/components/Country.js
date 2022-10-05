import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { COUNTRY_LIST } from "../App";

const COUNTRY = () => {
  const { numericCode } = useParams();
  const {new_list} = useContext(COUNTRY_LIST);
  const [selected, setSelected] = useState([]);


  useEffect(() => {

    const found = new_list.filter((country) => {
      return country.numericCode.toString() === numericCode.toString();
    });
    setSelected(found);
    console.log(selected);
  });

  const CLICKED = () => { 


    return (
      <div className={dark ? " night_header country" : " light_header country"} key={selected.numericCode}>
        <h4>{selected.name}</h4>
        <p>population: {selected.population}</p>
        <p>region: {selected.region}</p>
        <p>capital: {selected.capital}</p>
      </div>
    );
  };

  return CLICKED;
};

export default COUNTRY;
