import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import HEADER from "./components/Header.js";
import GENERAL from "./components/General";
import COUNTRY from "./components/Country";
// import COUNTRIES from "./components/Countries";

export const LIGHT_DARK = React.createContext();
export const SELECT_CONTINENT = React.createContext();
export const COUNTRY_LIST = React.createContext();

let CountryListProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const loadCountries = async () => {
    // if (select_continent === 'all') {
    //   fetchCountry()
    // } else {
    // profile.filter((countries) => {
    //   return countries.region === select_continent
    // })
    
    try {
      const response = await fetch('https://restcountries.com/v2/all')
      const data = await response.json()
      if (response.status === 200) {
        setList(data)
        setIsLoading(false)

        // it should filter this my search through the selected continent list
        // if (my_search.length > 0) {
        //   setList(
        //     list.filter((countries) => {
        //       return countries.name
        //         .toLowerCase()
        //         .includes(my_search.toLowerCase())
        //     })
        //   )
        // }
      } else {
        setIsError(true)
        // setFetch_error(profile.message)
      }
    } catch (error) {
      // console.log(error.message)
      setIsError(error.message)
      // console.log(fetch_error)
    }
  }
  
  useEffect(() => {
    loadCountries()
  }, [])
  

  return (
    <COUNTRY_LIST.Provider value={{ list, isLoading, isError }}>{children}</COUNTRY_LIST.Provider>
  )
}

function App() {
  const [dark, setDark] = useState(true);

  return (
    <React.Fragment>
      <LIGHT_DARK.Provider value={{ dark, setDark }}>
        <CountryListProvider>
          <HEADER />
          <Routes>
            <Route path="/" exact element={<GENERAL />} />
            <Route path="country/:numericCode" exact element={<COUNTRY />} />
          </Routes>
        </CountryListProvider>
      </LIGHT_DARK.Provider>
    </React.Fragment>
  );
}

export default App;
