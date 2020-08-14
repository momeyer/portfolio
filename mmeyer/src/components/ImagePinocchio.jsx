import React from "react";
import Mockup from "../static/mockup_pinocchio.png";
import { useSpring, animated } from "react-spring";

function Image() {
  const props = useSpring({
    to: { opacity: 1, marginLeft: -80 },
    from: { opacity: 0, marginLeft: -500 },
    config: { delay: 1000, duration: 1000 },
  });
  return (
    <div className="col-sm-10 col-lg-5 ">
      <animated.img style={props} src={Mockup} width="120%" />
    </div>
  );
}
export default Image;
