import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LIGHT_DARK } from "../App";
import { COUNTRY_LIST } from "../App";

const LOADED = () => {
  const { dark } = useContext(LIGHT_DARK)
  const { list } = useContext(COUNTRY_LIST)

  /** If search is set or continent is set, you filter by those values if they exist and if they are not found, display something to tell them */

  const filtered_countries = list.filter(country => country.continent === 'selected_continent or something or country.name === search-value')


  return list.map((country_info) => {
    const { name, population, region, capital, flags, numericCode } =
      country_info

    return (
      <Link
        to={`/country/${numericCode}`}
        key={numericCode}
        className={dark ? ' night_header country' : ' light_header country'}
      >
        <img alt='country flag' src={flags.png} />
        <div className='country_details'>
          <h4>{name}</h4>
          <p>population: {population}</p>
          <p>region: {region}</p>
          <p>capital: {capital}</p>
        </div>
      </Link>
    )
  })
}

const COUNTRIES = ({ select_continent, my_search }) => {
  const { isLoading, isError } = useContext(COUNTRY_LIST);

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
        <h2>Error : {isError}</h2>
      </div>
    )
  }

  return <LOADED />
};

export default COUNTRIES;
