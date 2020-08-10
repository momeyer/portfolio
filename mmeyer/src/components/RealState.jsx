import React, { Component } from "react";
import Mockup from "../static/mockup_real_state.png";

class Profile extends Component {
  state = {};
  render() {
    return (
      <div className="col-12 row mt-5">
        <div
          className="col-5 mt-5 offset-1"
          style={{ height: "350px", borderRadius: "10%" }}
        >
          <h1 className="mb-5" style={{ color: "#57886cff", fontFamily: "" }}>
            RealState4U
          </h1>
          <span style={{ color: "#57886cff" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            iaculis tempus erat, in sodales quam efficitur at. Proin sit amet
            molestie urna, eu convallis felis. Morbi libero tortor, venenatis in
            nisl ac, pellentesque porta nisl. Suspendisse porta ut enim at
            mattis.
          </span>
          <div className="col-12 mt-5 ml-4 row">
            <span
              className="col-8"
              style={{
                backgroundColor: "#FECB34",
                height: "15px",
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
              }}
            ></span>
            <span
              className="col-2"
              style={{
                backgroundColor: "#2AB7CA",
                height: "15px",
                marginLeft: "2px",
              }}
            ></span>
            <span
              className="col-1"
              style={{
                backgroundColor: "#FE4A49",
                height: "15px",
                marginLeft: "2px",
                borderTopRightRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
            ></span>
            <div className="row col-12 mt-2">
              <span
                className="badge badge-pill"
                style={{ backgroundColor: "#FECB34" }}
              >
                {" "}
              </span>
              <small className="mr-3 ml-1">JavaScript / ReactJs 74.3%</small>
              <span
                className="badge badge-pill p-2"
                style={{ backgroundColor: "#2AB7CA" }}
              >
                {" "}
              </span>
              <small className="mr-3 ml-1">Python 23.4%</small>
              <span
                className="badge badge-pill p-2"
                style={{ backgroundColor: "#FE4A49" }}
              >
                {" "}
              </span>
              <small className="mr-3 ml-1">HTML 2.3%</small>
            </div>
          </div>
        </div>

        <div className="col-5 mt-5">
          <img src={Mockup} height="400px" />
        </div>
      </div>
    );
  }
}

export default Profile;
