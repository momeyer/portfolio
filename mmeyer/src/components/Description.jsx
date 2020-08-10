import React, { Component } from "react";

class Description extends Component {
  state = {};
  render() {
    return (
      <div
        className="col-5 mt-5 ml-2"
        style={{ height: "350px", borderRadius: "10%" }}
      >
        <h1 className="mb-5" style={{ color: "#57886cff", fontFamily: "" }}>
          Who?
        </h1>
        <span style={{ color: "#57886cff" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          iaculis tempus erat, in sodales quam efficitur at. Proin sit amet
          molestie urna, eu convallis felis. Morbi libero tortor, venenatis in
          nisl ac, pellentesque porta nisl. Suspendisse porta ut enim at mattis.
          Proin vitae tempus tortor. Vivamus tempor tempor orci, vel laoreet
          ipsum posuere vitae. Praesent ullamcorper euismod convallis. Duis
          luctus ligula sit amet tortor congue, sit amet malesuada orci mattis.
          Integer et neque mi. Curabitur pretium nisl non sagittis commodo.
          Mauris maximus, turpis sed consequat dignissim, ex ex consectetur
          justo, at scelerisque est libero sed mauris.
        </span>
      </div>
    );
  }
}

export default Description;
