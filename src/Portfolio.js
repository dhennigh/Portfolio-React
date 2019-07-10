import React from "react"
import Project from "./Project"
import projectsData from "./projectsData"

class Portfolio extends React.Component {
    render() {
        return (
            <div>
            	let i = 0;
                {projectsData.map(project => (
                	<Project
                		key={'project${i++}'}
                		name={project.name}
                		description={project.description}
                	/>
                ))}
            </div>
        )
    }
}

export default Portfolio