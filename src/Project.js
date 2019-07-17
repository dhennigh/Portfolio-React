import React from "react"
import projectsData from "./projectsData"

class Project extends React.Component {
    render() {
        return (
            <div className="container project-showcase">
            	<img src={this.props.image}/>
            	<h3>{this.props.name}</h3>
                <p>{this.props.description}</p>
                <a href="{this.props.link}" className="project-links">View Project</a>
            </div>
        )
    }
}

export default Project