import React from "react"
import pic from "./about_me_pic.jpg"
import Pdf from "./Resume.pdf"

import { Link } from 'react-router-dom'

class AboutMe extends React.Component {
    render() {
        return (
            <div className="about-me-text container">
        		<span className="about-me-header-span">
	            	<img src={pic} alt="Picture of Darin" className="about-me-pic col-md-3" title="Picture of Darin"></img>
	           		<h2 className="col-md-9 about-headline">
	        		<span className="about-me-yellow">Hard-working</span>, <span className="about-me-yellow">dedicated</span>
	        		<br></br> software analyst with a passion for
	        		<br></br><span className="about-me-purple"> collaboration</span>, 
	        		<span className="about-me-purple"> efficiency</span>, and 
	        		<span className="about-me-purple"> training</span>.
	        		</h2>
		        </span>
		       	
		       	<div className="container work-experience">
			        <h3 className="about-me-section">
			        	Work Experience
			        </h3>

		        	<p className="about-paragraph" id="about-paragraph-1">
		        	Since 2010 I have been working in the healthcare IT industry with a focus on implementing 
		        	electronic medical records.  I have focused on the installation of <a href="https://www.epic.com" className="about-link">Epic's</a> home 
		        	health and hospice billing applications.
		        	</p>

		        	<p className="about-paragraph" id="about-paragraph-2">
		        	Configuring the software at multiple healthcare organizations has made me passionate about helping
		        	others and about learning more about software development.  I aim to expand my horizons
		        	and use my skills to produce interactive webistes that continue to help users in various
		        	domains: healthcare, religious, music, lifestyle.
		        	</p>		   	
	        	</div>

	        	<div className="container education-experience">
	        		<h3 className="about-me-section">
	        			Education Experience
        			</h3>

        			<p>
        				<span className="font-weight-bold education-paragraph">
        					Software Development
        				</span>
        				<ul className="about-paragraph">
        					<li>
        					OpenClassrooms
        						<ul>
        							<li>
        							March 2019 to present
        							</li>
        							<li>
        							FullStack Software Development Path
        							</li>
        							<li>
        							<Link to='/portfolio/' className="about-link">Portfolio</Link>
        							</li>
        						</ul>
        					</li>
        				</ul>
        			</p>

        			<p>
        				<span className="font-weight-bold education-paragraph">
        					Masters, Career and Training Development
        				</span>
        				<ul className="about-paragraph">
        					<li>
        					Eastern Illinois University
        						<ul>
        							<li>
        							December 2013
        							</li>
        						</ul>
        					</li>
        				</ul>
        			</p>

        			<p>
        				<span className="font-weight-bold education-paragraph">
        					Bachelors, Foreign Languages, French
        				</span>
        				<ul className="about-paragraph">
        					<li>
        					Eastern Illinois University
        						<ul>
        							<li>
        							May 2010
        							</li>
        							<li>
        							Undergraduate Honors Thesis, French Translation
        							</li>
        						</ul>
        					</li>
        				</ul>
        			</p>
    			</div>

    			<div className="container">
    				<h3 className="about-me-section">
	        			Additional Information
        			</h3>
        			<p className="about-paragraph">
		        	For more detailed information regarding my work and education, please see my <a href={ Pdf } target="_blank" className="about-link">resume</a>.
		        	</p>
	        	</div>

	        	<div className="container">
	        		<p className="about-paragraph" id="about-paragraph-3">
		        	I hope you'll take a look at my projects and use the <Link to='/contact/' className="about-link">contact</Link> form
		        	to <a href="mailto:dchennigh@gmail.com" className="about-link" title="E-mail me">get in touch</a>.
		        	</p>
	        	</div>
            </div>
        )
    }
}

export default AboutMe