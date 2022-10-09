import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { COUNTRY_LIST, LIGHT_DARK } from "../App";

const COUNTRY = () => {
  const { numericCode } = useParams();
  const { list } = useContext(COUNTRY_LIST);
  const { dark } = useContext(LIGHT_DARK);
  const selected = list.find((country) => {
    return country.numericCode.toString() === numericCode.toString();
  });


  console.log(selected.borders);

  return (
    <div
      className={dark ? " night_header selected" : " light_header selected"}
      key={selected.numericCode}
    >

        <img alt="country flag" src={selected.flags.png} />


      <div className="details_container">
        <h4>{selected.name}</h4>
        <div className="details">
          <div className="details1">
            <p>
              <span className="subtopics">Native Name: </span>
              {selected.nativeName}
            </p>
            <p>
              <span className="subtopics">population: </span>{" "}
              {selected.population}
            </p>
            <p>
              <span className="subtopics">Region: </span>
              {selected.region}
            </p>
            <p>
              <span className="subtopics">Sub Region: </span>
              {selected.subregion}
            </p>
            <p>
              <span className="subtopics">capital: </span>
              {selected.capital}
            </p>
          </div>

    
          <div className="details2">
            <p>
              <span className="subtopics">Top Level Domain: </span>
              {selected.topLevelDomain[0]}
            </p>
            <p>
              <span className="subtopics">Currencies: </span>
              {selected.currencies[0].name}
            </p>
            <p><span className="subtopics">Languages: </span><span className="languages">{selected.languages.map((lang)=><span> {lang.name}</span>)}</span></p>
          </div>
        </div>

        <span className="border_countries"><h4>Border Countries:  </h4><span className="border_container">   
           {selected.borders.map((bor)=> <span className="border">{bor}</span>)} 
        </span></span>
        

      </div>
    </div>
  );
};

export default COUNTRY;
