import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Details.css";

const Details = () => {
  const [country, setCountry] = useState();
  const getData = async () => {
    try {
      const { data } = await axios.get(
        "http://restcountries.eu/rest/v2/name/Belgium"
      );
      setCountry(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  country && console.log(country);

  return (
    <div>
      <div className="Header">
        <div className="Central_header">
          <h3> Where in the world ?</h3>
          <button className="DarkMode">
            <i class="far fa-moon"></i> Dark Mode
          </button>
        </div>
      </div>
      <div className="Container">
        <div className="Central_Container">
          <div className="BackButton">
            <button>
              <i class="fas fa-arrow-left"></i> Back
            </button>
          </div>
          <div className="Info">
            <div className="Flag">
              {country && (
                <div className="Div_flag">
                  <img
                    width="80%"
                    height="300vh"
                    src={country[0].flag}
                    alt="Flaaaaaaaag"
                  />
                </div>
              )}
            </div>
            <div className="Country_Info">
              <div className="Title">
                <h1>{country && country[0].name}</h1>
              </div>
              <div className="Part1">
                <div className="Part1_1">
                  <ul>
                    <li>NativeName: {country && country[0].nativeName}</li>
                    <li> Population: {country && country[0].population}</li>
                    <li> Region: {country && country[0].region}</li>
                    <li> Sub Region: {country && country[0].subregion}</li>
                    <li> Capital: {country && country[0].capital}</li>
                  </ul>
                </div>
                <div class="Part1_2">
                  <ul>
                    <li>
                      Top Level Domain:{" "}
                      {country && country[0].topLevelDomain.map((elem) => elem)}
                    </li>
                    <li>
                      currencies:
                      {country &&
                        country[0].currencies.map((elem) => {
                          return <span>{elem.name}</span>;
                        })}
                    </li>
                    <li>
                      Languages:
                      {country &&
                        country[0].languages.map((elem) => {
                          return <span>{elem.name}</span>;
                        })}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="Part2">
                <div Class="TitlePart2"> BorderCountries: </div>
                <div className="BorderCountries">
                  {country &&
                    country[0].borders.map((elem) => (
                      <div className="BorderCountry">{elem}</div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
