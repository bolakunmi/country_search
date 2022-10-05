import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import HEADER from "./components/Header.js";
import GENERAL from "./components/General";
import COUNTRY from "./components/Country";
// import COUNTRIES from "./components/Countries";

export const LIGHT_DARK = React.createContext();
export const SELECT_CONTINENT = React.createContext();
export const COUNTRY_LIST = React.createContext();

function App() {
  const [dark, setDark] = useState(true);

  return (
    <React.Fragment>
      <LIGHT_DARK.Provider value={{ dark, setDark }}>
        <HEADER />
        <Routes>
          <Route path='/' exact element={<GENERAL />}/>
          <Route path='/country/:numericCode' exact element={<COUNTRY />}/>
          
        </Routes>
      </LIGHT_DARK.Provider>
    </React.Fragment>
  );
}

export default App;
