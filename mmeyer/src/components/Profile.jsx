import React, { Component } from "react";
import Description from "./Description.jsx";
import Picture from "./Picture.jsx";

class Profile extends Component {
  state = {};
  render() {
    return (
        <div className="col-12 row mt-5">
            <Picture /><Description />    
        </div>
    );
  }
}

export default Profile;
