import React from "react";
import Mockup from "../static/mockup_real_state.png";
import { useSpring, animated } from "react-spring";

function Image() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <div className="col-sm-10 col-lg-5">
      <animated.img style={ props } src={Mockup} width="120%" />
    </div> );
} export default Image;
