import React from "react"

class LinkedinContact extends React.Component {
    render() {

        let LinkedinContactStyle = {
                color: "#0073b1",
                fontSize: "36px",
            }

        return (
            <div>
                <a class="linkedin" 
                target="_blank" 
                href="https://www.linkedin.com/in/darinhennigh/" 
                title="Connect on Linkedin">
                    <i class="fab fa-linkedin" style={LinkedinContactStyle}></i>
                </a>
            </div>
        )
    }
}

export default LinkedinContact