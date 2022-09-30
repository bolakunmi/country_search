import React, {useState} from "react";
import "./index.css";
import HEADER from "./components/Header.js";
import SEARCH from "./components/Search";
// import COUNTRIES from "./components/Countries";

export const LIGHT_DARK=React.createContext()

function App() {
  const [dark, setDark] = useState(true);




  return (
    <React.Fragment>
      <LIGHT_DARK.Provider value={{ dark, setDark }}>
        <HEADER />
        <SEARCH />
      </LIGHT_DARK.Provider>
    </React.Fragment>
  );
}

export default App;
