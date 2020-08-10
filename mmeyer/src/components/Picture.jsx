import React, { Component } from 'react';
import Pic from '../static/pic.png';

class Picture extends Component {
    state = {  }
    render() { 
        return <div className="col-5 mt-5 offset-1"><img src={Pic} height="400px" /></div>;
    }
}
 
export default Picture;