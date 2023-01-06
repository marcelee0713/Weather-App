import "../styles/header.scss";
import searchIcon from "../assets/search.svg";

export default function showHeader() {
  const container = document.createElement("div");
  const textContainer = document.createElement("div");
  const searchContainer = document.createElement("div");

  const bigText = document.createElement("h1");
  const subText = document.createElement("div");

  const searchForm = document.createElement("form");
  const searchInput = document.createElement("input");
  const searchButton = document.createElement("button");
  const imgBtn = document.createElement("img");

  container.appendChild(textContainer);
  container.appendChild(searchContainer);

  textContainer.appendChild(bigText);
  textContainer.appendChild(subText);
  searchContainer.appendChild(searchForm);
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

  return container;
}
