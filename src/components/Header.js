import "../styles/header.scss";
import searchIcon from "../assets/search.svg";
import getAndDisplayData from "./FetchData";

export default function showHeader(content) {
  let isSearchValid = false;
  let input = "";
  const container = document.createElement("div");
  const textContainer = document.createElement("div");
  const searchContainer = document.createElement("div");

  const bigText = document.createElement("h1");
  const subText = document.createElement("div");

  const searchForm = document.createElement("form");
  const inputValidationText = document.createElement("span");
  const searchInput = document.createElement("input");
  const searchButton = document.createElement("button");
  const imgBtn = document.createElement("img");

  container.appendChild(textContainer);
  container.appendChild(searchContainer);

  textContainer.appendChild(bigText);
  textContainer.appendChild(subText);
  searchContainer.appendChild(searchForm);
  searchContainer.appendChild(inputValidationText);
  searchForm.appendChild(searchInput);
  searchForm.appendChild(searchButton);
  searchButton.appendChild(imgBtn);

  container.classList.add("header-container");
  textContainer.classList.add("header-text-container");
  subText.classList.add("sub-text");

  searchContainer.classList.add("search-container");
  searchForm.classList.add("input-form");
  searchForm.setAttribute("method", "get");
  searchForm.setAttribute("action", "");
  inputValidationText.classList.add("input-validation-text");

  searchInput.setAttribute("type", "text");
  searchInput.setAttribute("placeholder", "Enter your city...");
  searchInput.setAttribute("name", "search-city");
  searchInput.setAttribute("id", "search");
  imgBtn.src = searchIcon;

  searchButton.classList.add("search-btn");
  searchButton.setAttribute("id", "search-city-btn");
  searchButton.setAttribute("type", "submit");
  bigText.textContent = "Weather App";
  subText.textContent = "Nice weather we're having...";
  inputValidationText.textContent = "placeholder";

  searchInput.addEventListener("input", () => {
    input = searchInput.value.trim();
    isSearchValid = input !== "" ? true : false;
    if (isSearchValid) {
      inputValidationText.classList.add("remove-span");
      inputValidationText.classList.remove("show-span");
    } else {
      inputValidationText.classList.remove("remove-span");
      inputValidationText.classList.add("show-span");
      inputValidationText.textContent = "Please enter an input!";
      inputValidationText.style.color = "red";
    }
  });
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (isSearchValid) {
      getAndDisplayData(input);
    } else {
      inputValidationText.classList.remove("remove-span");
      inputValidationText.classList.add("show-span");
      inputValidationText.textContent = "Please enter an input";
      inputValidationText.style.color = "red";
    }
  });

  return container;
}
