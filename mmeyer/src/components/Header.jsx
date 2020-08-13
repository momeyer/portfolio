import React, {Component, Fragment} from "react";
import MoniqueMeyer from "../static/monique.png";
import { useSpring, animated } from "react-spring";

function Header() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.nav
      style={props}
      class="navbar navbar-expand-lg navbar-dark bg-dark"
    >
      <span class="navbar-brand mx-auto" href="#">
        <animated.img style={props} src={MoniqueMeyer}></animated.img>
      </span>
    </animated.nav>
  );
}
export default Header;