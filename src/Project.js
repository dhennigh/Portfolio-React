import React from "react"

class Project extends React.Component {
    render() {
        return (
            <div className="container project-showcase">
                <div className="card">
                	<img src={this.props.image} className="project-image card-img-top" title={this.props.title} />
                	<div className="card-body">
                        <h3>{this.props.name}</h3>
                        <p className="project-description">{this.props.description}</p>
                        <a href={this.props.link} className="project-links" target="_blank">View Project</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project