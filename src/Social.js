import React from "react"

class Social extends React.Component {
    render() {

        return (
            <div className="social-icons">
            	<ul className="social-icons">
            		<li>
            			<a target="_blank" href="https://github.com/dhennigh">
                        <i className="fab fa-github-square" id="github-icon"></i>
                        <span className="social-title">Github</span>
                        </a>
            		</li>
            		<li>
            			<a
                        target="_blank" 
                        href="https://www.linkedin.com/in/darinhennigh/" 
                        title="Connect on Linkedin">
                            <i class="fab fa-linkedin" id="linkedin-icon"></i>
                            <span className="social-title">LinkedIn</span>
                        </a>
            		</li>
                    <li>
                        <a target="_blank" href="https://www.facebook.com/dchennigh">
                        <i className="fab fa-facebook-square" id="facebook-icon"></i>
                        <span className="social-title">Facebook</span>
                        </a>
                    </li>
            	</ul>
            </div>
        )
    }
}

export default Social