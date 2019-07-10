import React from "react"
import Pdf from "./Resume.pdf"

class Resume extends React.Component {
    render() {
        return (
            <div>
            	<a href= {Pdf} target="_blank" className="resume-link text-info">Resume</a>
            </div>
        )
    }
}

export default Resume