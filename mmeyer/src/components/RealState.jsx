import React from "react";
import logo from "../static/idRS4U.png"
import Image from "./ImageRS4U.jsx";
import { useSpring, animated } from "react-spring";

function RealState () {
  const props = useSpring({
    to: { opacity: 1, marginLeft: 0 },
    from: { opacity: 0, marginLeft: 100 },
    config: { delay: 1500, duration: 1500 },
  } );
  return (
    <div className="col-10 row mt-5 offset-1">
      <Image />
      <animated.div style={props} className="col-sm-10 col-lg-6 offset-1">
        <div className="col-sm-10 col-lg-5 mb-4">
          <img src={logo} width="125%" />
        </div>
        <span className="text-left text-dark">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          iaculis tempus erat, in sodales quam efficitur at. Proin sit amet
          molestie urna, eu convallis felis. Morbi libero tortor, venenatis in
          nisl ac, pellentesque porta nisl. Suspendisse porta ut enim at mattis.
        </span>
        <div className="col-12 my-5 row">
          <span
            style={js_style}
          ></span>
          <span
            style={python_style}
          ></span>
          <span
            style={html_style}
          ></span>
          <dl>
            <div className="col-sm-12">
              <dt className="yellow"></dt>
              <dd className="legend"> JavaScript / ReactJs 74.3%</dd>
            </div>
            <div className="col-sm-12">
              <dt className="blue"></dt>
              <dd className="legend">Python 23.4%</dd>
            </div>
            <div className="col-sm-12">
              <dt className="red"></dt>
              <dd className="legend">HTM 2.3%</dd>
            </div>
          </dl>
        </div>
      </animated.div>
    </div>
  );
}

const js_style = {
  backgroundColor: "#FECB34",
  height: "10px",
  width: "74.3%",
  borderTopLeftRadius: "10px",
  borderBottomLeftRadius: "10px",
};
const python_style = {
  backgroundColor: "#2AB7CA",
  height: "10px",
  width: "20.4%",
  marginLeft: "2px",
};

const html_style = {
  backgroundColor: "#FE4A49",
  height: "10px",
  width: "2.3%",
  marginLeft: "2px",
  borderTopRightRadius: "10px",
  borderBottomRightRadius: "10px",
};
export default RealState;


