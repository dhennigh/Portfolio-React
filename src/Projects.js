import React from "react"
import projectsData from "./projectsData"

class Projects extends React.Component {
    render() {
        return (
            <div>
            	let i = 0;
                {projectsData.map(project => (
                	<Projects
                		key={'project${i++}'},
                		name={project.name},
                		description={project.description},
                        class="col-md"
                	/>
                ))}
            </div>
        )
    }
}

export default Projects