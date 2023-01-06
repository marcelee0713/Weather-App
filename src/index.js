import "./styles/style.scss";
import showHeader from "./components/Header";
import showContent from "./components/Content";

const header = document.querySelector("header");
const content = document.querySelector("main");

header.appendChild(showHeader());
content.appendChild(showContent());
