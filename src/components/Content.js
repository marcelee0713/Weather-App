import "../styles/content.scss";

import sunny01D from "../assets/01d.svg";
import fewClouds02D from "../assets/02d.svg";
import cloudy034D from "../assets/03-4d.svg";
import showerRain10D from "../assets/09d.svg";
import rain10D from "../assets/10d.svg";
import thunderstorm11D from "../assets/11d.svg";
import snow13D from "../assets/13d.svg";
import mist50D from "../assets/13d.svg";

import cityIcon from "../assets/city.svg";
import humidityIcon from "../assets/humidity.svg";
import temperatureIcon from "../assets/temperature.svg";
import upwardIcon from "../assets/upward.svg";
import downwardIcon from "../assets/downward.svg";
import windPressureIcon from "../assets/wind.svg";

export default function showContent() {
  const content = document.createElement("div");
  const weatherImageContainer = document.createElement("div");
  const line = document.createElement("hr");
  const weatherDetails = document.createElement("div");

  // Inside weatherImageContainer
  const weatherImgHolder = document.createElement("div");
  const weatherDescription = document.createElement("h2");

  // Inside weatherImgHolder
  const weatherImage = document.createElement("img");

  // Inside weatherDetails
  const cityDetail = document.createElement("div");
  const tempDetail = document.createElement("div");
  const humidityDetail = document.createElement("div");
  const maxTempDetail = document.createElement("div");
  const minTempDetail = document.createElement("div");
  const windPressureDetail = document.createElement("div");

  // Inside every Details
  const citySvgPlacements = document.createElement("div");
  const tempSvgPlacements = document.createElement("div");
  const humiditySvgPlacements = document.createElement("div");
  const maxTempSvgPlacements = document.createElement("div");
  const minTempSvgPlacements = document.createElement("div");
  const windPressureSvgPlacements = document.createElement("div");

  const cityValue = document.createElement("div");
  const tempValue = document.createElement("div");
  const humidityValue = document.createElement("div");
  const maxTempValue = document.createElement("div");
  const minTempValue = document.createElement("div");
  const windPressureValue = document.createElement("div");

  // Inside every SvgPlacements
  const citySvg = document.createElement("img");
  const tempSvg = document.createElement("img");
  const humiditySvg = document.createElement("img");
  const maxTempSvg1 = document.createElement("img");
  const maxTempSvg2 = document.createElement("img");
  const minTempSvg1 = document.createElement("img");
  const minTempSvg2 = document.createElement("img");
  const windPressureSvg = document.createElement("img");

  content.appendChild(weatherImageContainer);
  content.appendChild(line);
  content.appendChild(weatherDetails);

  weatherImageContainer.appendChild(weatherImgHolder);
  weatherImageContainer.appendChild(weatherDescription);
  weatherImgHolder.appendChild(weatherImage);

  weatherDetails.appendChild(cityDetail);
  weatherDetails.appendChild(tempDetail);
  weatherDetails.appendChild(humidityDetail);
  weatherDetails.appendChild(maxTempDetail);
  weatherDetails.appendChild(minTempDetail);
  weatherDetails.appendChild(windPressureDetail);

  cityDetail.appendChild(citySvgPlacements);
  tempDetail.appendChild(tempSvgPlacements);
  humidityDetail.appendChild(humiditySvgPlacements);
  maxTempDetail.appendChild(maxTempSvgPlacements);
  minTempDetail.appendChild(minTempSvgPlacements);
  windPressureDetail.appendChild(windPressureSvgPlacements);

  cityDetail.appendChild(cityValue);
  tempDetail.appendChild(tempValue);
  humidityDetail.appendChild(humidityValue);
  maxTempDetail.appendChild(maxTempValue);
  minTempDetail.appendChild(minTempValue);
  windPressureDetail.appendChild(windPressureValue);

  citySvgPlacements.appendChild(citySvg);
  tempSvgPlacements.appendChild(tempSvg);
  humiditySvgPlacements.appendChild(humiditySvg);
  maxTempSvgPlacements.appendChild(maxTempSvg1);
  maxTempSvgPlacements.appendChild(maxTempSvg2);
  minTempSvgPlacements.appendChild(minTempSvg1);
  minTempSvgPlacements.appendChild(minTempSvg2);
  windPressureSvgPlacements.appendChild(windPressureSvg);

  content.classList.add("content");

  weatherImageContainer.classList.add("weather-image-container");
  weatherDetails.classList.add("weather-details");

  weatherImgHolder.classList.add("weather-image");
  weatherDescription.classList.add("weather-description");

  weatherImage.classList.add("weather-image");
  weatherImage.setAttribute("id", "weather-image-svg");

  cityDetail.classList.add("details");
  tempDetail.classList.add("details");
  humidityDetail.classList.add("details");
  maxTempDetail.classList.add("details");
  minTempDetail.classList.add("details");
  windPressureDetail.classList.add("details");

  citySvgPlacements.classList.add("icon-placements");
  tempSvgPlacements.classList.add("icon-placements");
  humiditySvgPlacements.classList.add("icon-placements");
  maxTempSvgPlacements.classList.add("icon-placements");
  minTempSvgPlacements.classList.add("icon-placements");
  windPressureSvgPlacements.classList.add("icon-placements");

  cityValue.classList.add("details-text");
  tempValue.classList.add("details-text");
  humidityValue.classList.add("details-text");
  maxTempValue.classList.add("details-text");
  minTempValue.classList.add("details-text");
  windPressureValue.classList.add("details-text");
  cityValue.setAttribute("id", "city");
  tempValue.setAttribute("id", "temp");
  humidityValue.setAttribute("id", "humidity");
  maxTempValue.setAttribute("id", "max-temp");
  minTempValue.setAttribute("id", "min-temp");
  windPressureValue.setAttribute("id", "wind-pressure");

  citySvg.classList.add("image-svg");
  citySvg.classList.add("large-svg");
  tempSvg.classList.add("image-svg");
  humiditySvg.classList.add("image-svg");
  maxTempSvg1.classList.add("image-svg");
  maxTempSvg2.classList.add("image-svg");
  maxTempSvg2.classList.add("small-svg");
  minTempSvg1.classList.add("image-svg");
  minTempSvg2.classList.add("image-svg");
  minTempSvg2.classList.add("small-svg");
  windPressureSvg.classList.add("image-svg");

  weatherImage.src = thunderstorm11D;
  weatherDescription.textContent = "Thunderstorm";

  cityValue.textContent = "Dagupan";
  tempValue.textContent = "22°C";
  humidityValue.textContent = "80%";
  maxTempValue.textContent = "24°C";
  minTempValue.textContent = "20°C";
  windPressureValue.textContent = "1.63 m/s";

  citySvg.src = cityIcon;
  tempSvg.src = temperatureIcon;
  humiditySvg.src = humidityIcon;
  maxTempSvg1.src = temperatureIcon;
  maxTempSvg2.src = upwardIcon;
  minTempSvg1.src = temperatureIcon;
  minTempSvg2.src = downwardIcon;
  windPressureSvg.src = windPressureIcon;

  return content;
}
