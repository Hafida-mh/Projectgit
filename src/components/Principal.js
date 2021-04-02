import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import "./principal.css";
const Principal = () => {
  const [country, setcountry] = useState();
  const [searchCountry, setsearchCountry] = useState("");
  const [regionn, setregionn] = useState("ALL");

  const getData = async () => {
    try {
      const { data } = await axios.get(`https://restcountries.eu/rest/v2/all`);
      setcountry(data);
    } catch (error) {
      console.log(error);
    }
  };

  // country &&  console.log(country)
  // setregionn(country)

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="Principal">
      <header>
        <div className="headerContainer">
          <div className="container">
            <h2>Where in the world ? </h2>
            <button>
              {" "}
              <i class="far fa-moon"></i> Dark Mode{" "}
            </button>
          </div>
        </div>
      </header>

      <div className="displayCountries">
        <div className="searchCountryAll">
          <div className="searchCountry">
            <form className="formOne" onSubmit={(e) => e.preventDefault()}>
              <i class="fas fa-search"></i>
              <input
                placeholder="Search for a country"
                onChange={(e) => setsearchCountry(e.target.value)}
                value={searchCountry}
              />
            </form>

            <form className="formTwo">
              <select
                name="dropdown"
                onChange={(e) => {
                  setregionn(e.target.value);
                }}
              >
                <option value="ALL">ALL</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Africa">Africa</option>
                <option value="Oceania">Oceania</option>
                <option value="Americas">Americas</option>
              </select>
            </form>
          </div>
        </div>

        <div className="countryBox">
          <div className="boxes">
            {country &&
              country
                .filter((elem) =>
                  elem.name.toUpperCase().includes(searchCountry.toUpperCase())
                )
                .filter((elem) => {
                  if (regionn == "ALL") return true;
                  return elem.region == regionn;
                })
                .map((elem) => {
                  return (
                    <div className="boxCountry">
                      <div className="flag">
                        <img src={elem.flag} alt="flag" />
                      </div>

                      <div className="informations">
                        <h3> {elem.name} </h3>
                        <p> Population : {elem.population} </p>
                        <p> Région : {elem.region} </p>
                        <p> Capital : {elem.capital} </p>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principal;
