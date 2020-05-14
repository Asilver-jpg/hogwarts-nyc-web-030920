import React from "react"

export default  class Hog extends React.Component{
render(){
    let hog= this.props.hog
    return(
        <div className= "pigTile" >{hog.name}</div>

    )
}

}