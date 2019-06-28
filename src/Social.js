import React from "react"
import GithubContact from "./GithubContact"
import LinkedinContact from "./LinkedinContact"

class Social extends React.Component {
    render() {

        return (
            <div class="social-icons">
            	<GithubContact />
                <LinkedinContact />
            </div>
        )
    }
}

export default Social