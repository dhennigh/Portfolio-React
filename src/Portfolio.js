import React from "react"
import Project from "./Project"
import projectsData from "./projectsData"

class Portfolio extends React.Component {
    render() {
        let i = 0;
        return (
            <div>
                <div className="container">
                    <h2 className="portfolio-form-heading">
                        Portfolio
                    </h2>
                </div>
                <div className="container">
                {projectsData.map(project => (
                	<Project
                		key={'project${i++}'}
                		name={project.name}
                		description={project.description}
                	/>
                ))}
                </div>
            </div>
        )
    }
}

export default Portfolio