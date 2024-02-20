import data from "../../data.json";
import React from "react";
import ("./header.css")

const header = data.header;
const mainImg = "../src/assets/img1.png";

function Header() {
  return (
    <header>
      <div class= "texts">
        <h1>{header.title}<span>.</span></h1>
        <h2>{header.subheading}</h2>
        <p>{header.paragraph}</p>
        <button>{header.button}</button>
      </div>

      <img src={mainImg} alt="mainImg" />
    </header>
  );
}

export default Header;
