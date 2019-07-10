import React from "react"
import projectsData from "./projectsData"

class Project extends React.Component {
    render() {
        return (
            <div className="col-md">
            	<img src={this.props.image}/>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default Project