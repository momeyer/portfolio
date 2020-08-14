import React, {Component, Fragment} from "react";
import MoniqueMeyer from "../static/monique.png";
import { useSpring, animated } from "react-spring";

function Header() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0},
    config: { delay: 500, duration: 2000 },
  });
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-dark"
    >
      <span class="navbar-brand mx-auto" href="#">
        <animated.img style={props} src={MoniqueMeyer}></animated.img>
      </span>
    </nav>
  );
}
export default Header;