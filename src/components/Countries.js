import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { LIGHT_DARK } from "../App";
import { COUNTRY_LIST } from "../App";
// import { SELECT_CONTINENT } from "../App";

// import TrackVisibility from "react-on-screen";

const COUNTRIES = ({ select_continent, my_search }) => {
  const { dark } = useContext(LIGHT_DARK);
  const { list, setList } = useContext(COUNTRY_LIST);
  const [fetch_error, setFetch_error] = useState("");
  // const {select_continent} = useContext(SELECT_CONTINENT);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const load_countries = async () => {
    if (select_continent === "all") {
      try {
        const response = await fetch("https://restcountries.com/v2/all");
        const profile = await response.json();
        console.log(response.statusCode);
        if (response.status === 200) {
          setList(profile);
          if (my_search.length > 0) {
            setList(
              list.filter((countries) => {
                return countries.name
                  .toLowerCase()
                  .includes(my_search.toLowerCase());
              })
            );
          }
          return setIsLoading(false);
        } else {
          setIsError(true);
          setFetch_error(profile.message);
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setFetch_error(error.message);
        console.log(fetch_error);
      }
    } else {
      try {
        const response = await fetch("https://restcountries.com/v2/all");
        const profile = await response.json();
        if (response.status === 200) {
          setList(
            profile.filter((countries) => {
              return countries.region === select_continent;
            })
          );

          // it should filter this my search through the selected continent list
          if (my_search.length > 0) {
            setList(
              list.filter((countries) => {
                return countries.name
                  .toLowerCase()
                  .includes(my_search.toLowerCase());
              })
            );
          }
          setIsLoading(false);
        } else {
          setIsError(true);
          setFetch_error(profile.message);
        }
      } catch (error) {
        console.log(error.message);
        setFetch_error(error.message);
        console.log(fetch_error);
      }
    }
  };

  useEffect(() => {
    load_countries();
  });

  const LOADED = () => {
    return list.map((country_info) => {
      const { name, population, region, capital, flags, numericCode } =
        country_info;

      return (
        <Link
          to={`/country/${numericCode}`}
          key={numericCode}
          className={dark ? " night_header country" : " light_header country"}
        >
          <img alt="country flag" src={flags.png} />
          <div className="country_details">
            <h4>{name}</h4>
            <p>population: {population}</p>
            <p>region: {region}</p>
            <p>capital: {capital}</p>
          </div>
        </Link>
      );
    });
  };

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h2>Error : {fetch_error}</h2>
      </div>
    );
  } else {
    // setIsLoading(false);

    return (
      <React.Fragment>
        <LOADED />
      </React.Fragment>
    );
  }
};

export default COUNTRIES;
