import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import HEADER from "./components/Header.js";
import GENERAL from "./components/General";
import COUNTRY from "./components/Country";
// import COUNTRIES from "./components/Countries";

export const LIGHT_DARK = React.createContext();
export const COUNTRY_LIST = React.createContext();

const CountryListProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [selectedContinent, setSelectedContinent] = useState('')
  const [search, setSearch] = useState('')

  const loadCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v2/all')
      const data = await response.json()
      if (response.status === 200) {
        setList(data)
        setIsLoading(false)
      } else {
        setIsError(true)
      }
    } catch (error) {
      setIsError(error.message)
    }
  }
  
  useEffect(() => {
    loadCountries()
  }, [])
  

  return (
    <COUNTRY_LIST.Provider
      value={{
        list,
        isLoading,
        isError,
        search,
        selectedContinent,
        setSearch,
        setSelectedContinent,
      }}
    >
      {children}
    </COUNTRY_LIST.Provider>
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
