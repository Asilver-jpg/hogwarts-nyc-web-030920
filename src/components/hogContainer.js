import React, { Fragment } from "react";
import Hog from "./hog.js"
class HogContainer extends React.Component {
  render() {
    return (
      <div className="ui grid container">
       <button onClick ={this.displayHogs }>Show Hogs</button>
        {/* {this.displayHogs(this.props.data)} */}
     </div>
    );
  }
  displayHogs = () => {
    console.log("OK")
    return <div className="ui gridContainer"> {
      this.props.data.map((hog, index) => (
        <Hog key= {index} hog= {hog}/>
      
      ))
  }
      </div>
  }
}

export default HogContainer;
