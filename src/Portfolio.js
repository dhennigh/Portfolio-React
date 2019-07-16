import React from "react"
import Project from "./Project"
import projectsData from "./projectsData"

class Portfolio extends React.Component {
    render() {
        let i = 0;
        return (
            <div className="container">
                <h2 className="portfolio-form-heading">
                    Portfolio
                </h2>
                {projectsData.map(project => (
                	<Project
                		key={'project${i++}'}
                		name={project.name}
                		description={project.description}
                        className="col-md-4"
                	/>
                ))}
            </div>
        )
    }
}

export default Portfolio