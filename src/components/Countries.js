import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { LIGHT_DARK } from "../App";
// import { COUNTRY_LIST } from "../App";
// import { SELECT_CONTINENT } from "../App";

// import TrackVisibility from "react-on-screen";

const COUNTRIES = ({ select_continent, my_search }) => {
  const { dark } = useContext(LIGHT_DARK);
  //   const { list, setList } = useContext(COUNTRY_LIST);
  const [list, setList] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [fetch_error, setFetch_error] = useState("");
  // const {select_continent} = useContext(SELECT_CONTINENT);

  //     const [isLoading, setIsLoading] = useState(true);
  //   const [isError, setIsError] = useState(false);
  //   const [user, setUser] = useState("DEFAULT_user");

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
          return setFetched(true);
        } else {
          setFetched(false);
          setFetch_error(profile.message);
        }
        //   setFetched(true);
        console.log(response.status + "real");
        console.log("loaded page");
        console.log(profile);
        console.log(list);
      } catch (error) {
        console.log("error page");
        console.log(error.message);
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

          return setFetched(true);
        } else {
          setFetched(false);
          setFetch_error(profile.message);
        }
        //   setFetched(true);
      } catch (error) {
        console.log("error page");
        console.log(error.message);
        setFetch_error(error.message);
        console.log(fetch_error);
      }
    }
  };

  useEffect(() => {
    load_countries();
  });

  //   function load_countries() {
  //     fetch("https://restcountries.com/v2/all")
  //       .then((response) => {
  //         response.json();
  //       })
  //       .then((user) => setList(user))
  //       .catch((err) => console.log(err));
  //   }

  const LOADED = () => {
    return list.map((country_info) => {
      const { name, population, region, capital, flags, numericCode } = country_info;

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

  //   if (isLoading) {
  //     return (
  //       <div>
  //         <h1>Loading...</h1>
  //       </div>
  //     );
  //   }
  //   if (isError) {
  //     return (
  //       <div>
  //         <h1>{isError}</h1>
  //       </div>
  //     );
  //   } else {
  //     // setIsLoading(false);

  //     return (
  //       <div>
  //         <h1>{user}</h1>
  //       </div>
  //     );
  //   }

  return (
    <React.Fragment>
      {fetched ? <LOADED /> : <h2>Error : {fetch_error}</h2>}
    </React.Fragment>
  );
};

export default COUNTRIES;
