import React, { useState } from "react";

const COUNTRIES = () => {
    // undo all commented
//   const [list, setList] = useState([]);
  const [fetched] = useState(false);

  const LOADED = () => {
    return <h2>loaded.</h2>
  };

  return <React.Fragment>
    {fetched? LOADED: (<h2>Loading!!!</h2>)}
  </React.Fragment>;
};

export default COUNTRIES;
