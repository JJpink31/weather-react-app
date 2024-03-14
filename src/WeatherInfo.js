import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperture from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <button className="btn btn-outline-light mt-2">Current Location</button>
      <div className="grid">
        <div className="row">
          <div className="col-3">
            <div className="row">
              <div className="main-city">{props.data.city}</div>
              <WeatherTemperture fahrenheit={props.data.temperature} />

              <div className="main-city-description">
                <ul>
                  <li>
                    <FormattedDate date={props.data.date} />
                  </li>
                </ul>
                <ul>
                  <li>
                    Humidity:{""}
                    {Math.round(props.data.humidity)}
                  </li>
                  <li>
                    Wind: {""}
                    {Math.round(props.data.wind)}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-3">
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="main-emoji"
            />
          </div>
        </div>
        <WeatherForecast forecastdata={props.coordinates} />
      </div>
    </div>
  );
}
