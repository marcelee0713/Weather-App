import "../styles/content.scss";

import sunny01D from "../assets/01d.svg";
import fewClouds02D from "../assets/02d.svg";
import cloudy034D from "../assets/03-4d.svg";
import showerRain09D from "../assets/09d.svg";
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

export default function showContent(
  description,
  iconId,
  city,
  temp,
  humidity,
  maxTemp,
  minTemp,
  windPressure
) {
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

  // Inside every SvgPlacements
  const citySvg = document.createElement("img");
  const tempSvg = document.createElement("img");
  const humiditySvg = document.createElement("img");
  const maxTempSvg1 = document.createElement("img");
  const maxTempSvg2 = document.createElement("img");
  const minTempSvg1 = document.createElement("img");
  const minTempSvg2 = document.createElement("img");
  const windPressureSvg = document.createElement("img");

  const cityValue = document.createElement("div");
  const tempValue = document.createElement("div");
  const humidityValue = document.createElement("div");
  const maxTempValue = document.createElement("div");
  const minTempValue = document.createElement("div");
  const windPressureValue = document.createElement("div");

  const cityHover = document.createElement("div");
  const tempHover = document.createElement("div");
  const humidityHover = document.createElement("div");
  const maxTempHover = document.createElement("div");
  const minTempHover = document.createElement("div");
  const windPressureHover = document.createElement("div");

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

  cityDetail.appendChild(cityHover);
  tempDetail.appendChild(tempHover);
  humidityDetail.appendChild(humidityHover);
  maxTempDetail.appendChild(maxTempHover);
  minTempDetail.appendChild(minTempHover);
  windPressureDetail.appendChild(windPressureHover);

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

  cityHover.classList.add("show-hover");
  tempHover.classList.add("show-hover");
  humidityHover.classList.add("show-hover");
  maxTempHover.classList.add("show-hover");
  minTempHover.classList.add("show-hover");
  windPressureHover.classList.add("show-hover");

  if (iconId === "01") {
    weatherImage.src = sunny01D;
  } else if (iconId === "02") {
    weatherImage.src = fewClouds02D;
  } else if (iconId === "03" || iconId === "04") {
    weatherImage.src = cloudy034D;
  } else if (iconId === "09") {
    weatherImage.src = showerRain09D;
  } else if (iconId === "10") {
    weatherImage.src = rain10D;
  } else if (iconId === "11") {
    weatherImage.src = thunderstorm11D;
  } else if (iconId === "13") {
    weatherImage.src = snow13D;
  } else if (iconId === "50") {
    weatherImage.src = mist50D;
  }

  weatherDescription.textContent = description;
  cityValue.textContent = city;
  tempValue.textContent = temp;
  humidityValue.textContent = humidity;
  maxTempValue.textContent = maxTemp;
  minTempValue.textContent = minTemp;
  windPressureValue.textContent = windPressure;

  citySvg.src = cityIcon;
  tempSvg.src = temperatureIcon;
  humiditySvg.src = humidityIcon;
  maxTempSvg1.src = temperatureIcon;
  maxTempSvg2.src = upwardIcon;
  minTempSvg1.src = temperatureIcon;
  minTempSvg2.src = downwardIcon;
  windPressureSvg.src = windPressureIcon;

  cityHover.textContent = "City";
  tempHover.textContent = "Temperature";
  humidityHover.textContent = "Humidity";
  maxTempHover.textContent = "Max Temp";
  minTempHover.textContent = "Min Temp";
  windPressureHover.textContent = "Wind Pressure";

  return content;
}
