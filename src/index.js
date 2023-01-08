import "./styles/style.scss";
import showHeader from "./components/Header";
import { showLoadingScreen, handleDefault } from "./components/Handles";

const header = document.querySelector("header");
const content = document.querySelector("main");

header.appendChild(showHeader());
content.appendChild(handleDefault());
