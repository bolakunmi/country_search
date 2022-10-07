import React, { useEffect, useContext } from "react";
import { LIGHT_DARK } from "../App";
import { Link } from "react-router-dom";

const HEADER = () => {
  const { dark, setDark } = useContext(LIGHT_DARK);

  useEffect(() => {
    const html = document.querySelector("html");
     dark ? html.classList.add("body_dark") : html.classList.add("body_light");
      dark ? html.classList.remove("body_light") : html.classList.remove("body_dark");
  }, [dark]);


  return (
    <React.Fragment>
      <div className={dark ? "night_header header" : "light_header header"}>
        <Link to={'/'} className={dark ? "night_header " : "light_header "}> <h2>Where in the world?</h2>
        </Link>
       
        <button
          className={dark ? "night_header header" : "light_header header"}
          onClick={() => {
            setDark(!dark);
          }}
          type="button"
        >
          <img
            src={
              dark ? require("../media/moon.png") : require("../media/sun.png")
            }
            alt="dark mode"
          />
          {dark ? <p>Dark Mode</p> : <p>Light Mode</p>}
        </button>
      </div>
    </React.Fragment>
  );
};

export default HEADER;
