import React from "react";
import Mockup from "../static/mockup_flack.png";
import { useSpring, animated } from "react-spring";

function Image() {
  const props = useSpring({
    to: {opacity: 1,
    marginLeft: 0},
    from: { opacity: 0, marginLeft: 500 },
    config: { delay: 1500, duration: 1500 },
  });
  return (
    <div className="flack_image col-sm-10 col-lg-5 mx-auto mt-5">
      <animated.img style={props} src={Mockup} width="95%" />
    </div>
  );
}
export default Image;
