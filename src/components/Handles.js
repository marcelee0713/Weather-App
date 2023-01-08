import "../styles/handle.scss";
import welcomeImage from "../assets/default_placeholder.svg";
import errorImg from "../assets/error_placeholder.svg";
export function handleDefault() {
  const container = document.createElement("div");
  const defaultImageContainer = document.createElement("div");
  const defaultImage = document.createElement("img");

  const welcomeText = document.createElement("h2");

  container.classList.add("default-container");
  defaultImageContainer.classList.add("default-image-container");
  defaultImage.src = welcomeImage;
  welcomeText.classList.add("welcome-text");

  container.appendChild(defaultImageContainer);
  container.appendChild(welcomeText);
  defaultImageContainer.appendChild(defaultImage);

  welcomeText.textContent = "Welcome!";
  return container;
}
export function handleError() {
  const container = document.createElement("div");
  const errorImageContainer = document.createElement("div");
  const errorImage = document.createElement("img");

  const errorText = document.createElement("h2");

  container.classList.add("error-container");
  errorImageContainer.classList.add("error-image-container");
  errorImage.src = errorImg;
  errorText.classList.add("error-text");

  container.appendChild(errorImageContainer);
  container.appendChild(errorText);
  errorImageContainer.appendChild(errorImage);

  errorText.textContent = "Something went wrong!";
  return container;
}
export function showLoadingScreen() {
  const container = document.createElement("div");
  const circle1 = document.createElement("div");
  const circle2 = document.createElement("div");
  const circle3 = document.createElement("div");
  const circle4 = document.createElement("div");
  const circle5 = document.createElement("div");

  container.classList.add("loading-screen-container");
  circle1.classList.add("circle");
  circle2.classList.add("circle");
  circle3.classList.add("circle");
  circle4.classList.add("circle");
  circle5.classList.add("circle");

  container.appendChild(circle1);
  container.appendChild(circle2);
  container.appendChild(circle3);
  container.appendChild(circle4);
  container.appendChild(circle5);

  return container;
}
