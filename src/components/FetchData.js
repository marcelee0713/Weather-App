import showContent from "./Content";
import { clearOutContainer } from "./ClearContainer";
import { handleError, showLoadingScreen } from "./Handles";

const content = document.querySelector("main");
async function getWeatherData(city) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=bbd7bbdb21ca1a1f84cabddafa1297c5`,
    { mode: "cors" }
  );
  const result = await res.json();
  if (result.cod === "404") {
    throw new Error("404 Error");
  }
  return result;
}

export default async function getAndDisplayData(city) {
  clearOutContainer(content);
  content.appendChild(showLoadingScreen());
  getWeatherData(city)
    .then((res) => {
      // weather icon
      const temp = (res.main.temp - 273.15).toString().slice(0, 5);
      const maxTemp = (res.main.temp_max - 273.15).toString().slice(0, 5);
      const minTemp = (res.main.temp_min - 273.15).toString().slice(0, 5);
      const humidity = res.main.humidity.toString() + "%";
      const city = res.name;
      const windPressure = res.wind.speed.toString();
      // prettier-ignore
      const description = capitalizeFirstLetter(res.weather[0].description);
      const iconId = res.weather[0].icon.slice(0, -1);
      clearOutContainer(content);
      content.appendChild(
        showContent(
          description,
          iconId,
          city,
          temp,
          humidity,
          maxTemp,
          minTemp,
          windPressure
        )
      );
    })
    .catch((res) => {
      clearOutContainer(content);
      content.appendChild(handleError());
    });
}
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
