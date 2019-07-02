import React from "react"
import GithubContact from "./GithubContact"
import LinkedinContact from "./LinkedinContact"
import FacebookContact from "./FacebookContact"

class Social extends React.Component {
    render() {

        return (
            <div class="social-icons">
            	<ul class="social-icons">
            		<li>
            			<GithubContact />
            		</li>
            		<li>
            			<LinkedinContact />
            		</li>
                    <li>
                        <FacebookContact />
                    </li>
            	</ul>
            </div>
        )
    }
}

export default Social