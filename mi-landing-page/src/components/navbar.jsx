import data from "../../data.json"
import React from "react"
import ("../components/navbar.css");

const logo = data.navbar.img;
const links = {
    link0: data.navbar.links[0],
    link1: data.navbar.links[1],
    link2: data.navbar.links[2],
    link3: data.navbar.links[3],
    link4: data.navbar.links[4],
}

function Navbar() {
    return (
    <nav>
        <img src={logo} alt="logo" />
        <li>{links.link0}</li>
        <li>{links.link1}</li>
        <li>{links.link2}</li>
        <li>{links.link3}</li>
        <li>{links.link4}</li>
    </nav>
    );
};

export default Navbar;