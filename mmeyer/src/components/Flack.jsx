import React, { Component } from "react";
import Mockup from "../static/mockup_flack.png";
import logo from "../static/id.png";

class Flack extends Component {
  state = {};
  render() {
    return (
      <div className="col-10 row mt-5 offset-1">
        <div
          className="col-sm-10 col-lg-6"
        >
          <div className="col-sm-12 col-lg-5 mb-4">
            <img src={logo} width="95%"/>
          </div>
          <span className="text-dark text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            iaculis tempus erat, in sodales quam efficitur at. Proin sit amet
            molestie urna, eu convallis felis. Morbi libero tortor, venenatis in
            nisl ac, pellentesque porta nisl. Suspendisse porta ut enim at
            mattis.
          </span>
          <div className="col-12 mt-4 row">
            <span
              style={{
                backgroundColor: "#FE4A49",
                height: "10px",
                width: "40%",
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
              }}
            ></span>
            <span
              style={{
                backgroundColor: "#FECB34",
                height: "10px",
                width: "32%",
                marginLeft: "3px",
              }}
            ></span>
            <span
              style={{
                backgroundColor: "#2AB7CA",
                height: "10px",
                marginLeft: "2px",
                width: "15%",
              }}
            ></span>
            <span
              style={{
                backgroundColor: "#23C269",
                height: "10px",
                marginLeft: "2px",
                width: "5%",
                borderTopRightRadius: "15px",
                borderBottomRightRadius: "10px",
              }}
            ></span>
            <dl>
              <dt className="red"></dt>
              <dd className="legend"> HTML 45.0%</dd>
              <dt className="yellow"></dt>
              <dd className="legend">JavaScript 32.8%</dd>
              <dt className="blue"></dt>
              <dd className="legend">Python 15.1%</dd>
              <dt className="green"></dt>
              <dd className="legend">CSS 7.1%</dd>
            </dl>
          </div>
        </div>
        <div className="col-sm-9 col-lg-5 offset-1">
          <img src={Mockup} width="95%" />
        </div>
      </div>
    );
  }
}

export default Flack;
