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
                		name={project.name}
                		description={project.description}
                        link={project.link}
                        image={project.image}
                        title={project.title}
                	/>
                ))}
                </div>
            </div>
        )
    }
}

export default Portfolio