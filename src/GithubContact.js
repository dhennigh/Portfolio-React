import React from "react"

class GithubContact extends React.Component {
    render() {
    	
    	let GithubContactStyle = {
        		color: "#24292e",
        		backgoundColor: "#24292e",
				fontSize: "36px",
        	}
        	
        return (
            <div>
            	<a class="github" target="_blank" href="https://github.com/dhennigh">
            	<i class="fab fa-github-square" id="github-icon" style={GithubContactStyle}></i>
            	</a>
            </div>
        )
    }
}

export default GithubContact