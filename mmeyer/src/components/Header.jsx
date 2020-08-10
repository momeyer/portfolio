import React, {Component, Fragment} from "react";
import bolder from "../static/momeyer.png";
import thin from "../static/monique.png";

class Header extends Component {
  state = {};
  render() { 
    return (
      <div className="container-fluid p-0 row">
        <div className="offset-5 my-3">
          <img style={{ position: "absolute", marginTop:"10px", marginLeft:"-40px" }} src={thin} height="30px" />
          <img src={bolder} height="50px"/>
        </div>
      </div>
    );
  }
}
export default Header;