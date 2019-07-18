import React from "react"

class Footer extends React.Component {
    render() {
        return (
            <div>
            	<footer className="footer-elements">
            		<ul className="footer-list-parent">
		            	<li className="facebook footer-list">
		            		<a target="_blank" href="https://www.facebook.com/dchennigh">
		            			<div className="footer-align">
					            	<i class="fab fa-facebook-square" id="facebook-icon"></i>
					            	<span className="footer-text"> Facebook</span>
					            </div>
			            	</a>
		            	</li>

		            	<li className="github footer-list">
			            	<a target="_blank" href="https://github.com/dhennigh">
			            	<i className="fab fa-github-square" id="github-icon"></i>
			            	<span className="footer-text"> Github</span>
			            	</a>
		            	</li>

		            	<li className="linkedin footer-list">
			                <a
			                target="_blank" 
			                href="https://www.linkedin.com/in/darinhennigh/" 
			                title="Connect on Linkedin">
			                    <i className="fab fa-linkedin" id="linkedin-icon"></i>
				            	<span className="footer-text"> Linkedin</span>
			                </a>
		            	</li>
		            </ul>
            	</footer>
            </div>
        )
    }
}

export default Footer