import React, { Component } from "react";
import logo from "../static/idRS4U.png"
import Image from "./ImageRS4U.jsx";

class RealState extends Component {
  state = {};
  render() {
    return (
      <div className="col-10 row mt-5 offset-1">
        <Image />
        <div
          className="col-sm-10 col-lg-6 offset-1"
        >
          <div className="col-sm-10 col-lg-5 mb-4">
            <img src={logo} width="125%" />
          </div>
          <span className="text-left text-dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            iaculis tempus erat, in sodales quam efficitur at. Proin sit amet
            molestie urna, eu convallis felis. Morbi libero tortor, venenatis in
            nisl ac, pellentesque porta nisl. Suspendisse porta ut enim at
            mattis.
          </span>
          <div className="col-12 my-5 row">
            <span
              style={{
                backgroundColor: "#FECB34",
                height: "10px",
                width: "74.3%",
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
              }}
            ></span>
            <span
              style={{
                backgroundColor: "#2AB7CA",
                height: "10px",
                width: "20.4%",
                marginLeft: "2px",
              }}
            ></span>
            <span
              style={{
                backgroundColor: "#FE4A49",
                height: "10px",
                width: "2.3%",
                marginLeft: "2px",
                borderTopRightRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
            ></span>
            <dl>
              <dt className="yellow"></dt>
              <dd className="legend"> JavaScript / ReactJs 74.3%</dd>
              <dt className="blue"></dt>
              <dd className="legend">Python 23.4%</dd>
              <dt className="red"></dt>
              <dd className="legend">HTM 2.3%</dd>
            </dl>
          </div>
        </div>
      </div>
    );
  }
}

export default RealState;