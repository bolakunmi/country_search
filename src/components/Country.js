import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const COUNTRY = () => {
  const { numericCode } = useParams();
  const [new_list, setNew_list] = useState();
  const [selected, setSelected] = useState();

  function load_countries() {
    fetch("https://restcountries.com/v2/all")
      .then((response) => {
        response.json();
      })
      .then((user) => setNew_list(user))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    load_countries();
    setSelected(
      new_list.find((country) => {
        return country.numericCode === numericCode;
      })
    );
  });
  const CLICKED = () => {
    const { name, population, region, capital, flags, numericCode } =
      selected;

    return (
      <div
        className={dark ? " night_header country" : " light_header country"}
      >
        <h4>{name}</h4>
            <p>population: {population}</p>
            <p>region: {region}</p>
            <p>capital: {capital}</p>
      </div>
    );
  };

  return CLICKED;
};

export default COUNTRY;
