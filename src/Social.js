import React from "react"
import GithubContact from "./GithubContact"
import LinkedinContact from "./LinkedinContact"

class Social extends React.Component {
    render() {
        return (
            <div>
            	<ul>
            		<li>
            			<GithubContact />
            		</li>
            		<li>
            		   	<LinkedinContact />
            		</li>
        		</ul>
            </div>
        )
    }
}

export default Social