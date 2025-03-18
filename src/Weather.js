import React from "react";
import axios from "axios";
import AtomicSpinner from "atomic-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in ${response.data.name} is ${response.data.main.temp}`);
  }
  let apiKey = "7746bdeabca928cfedcad71e52fd9d66";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <AtomicSpinner
      atomSize={200}
      displayElectronPaths="false"
      electronPathColor="#707070"
      electronSize={1.5}
      electronSpeed={2}
      nucleusDistanceFromCenter={2.5}
    />
  );
}
