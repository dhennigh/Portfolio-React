import React from "react"
import pic from "./about_me_pic.jpg"

import { Link } from 'react-router-dom'

class AboutMe extends React.Component {
    render() {
        return (
            <div className="about-me-text">
        		<div className="container row">
	            	<img src={pic} alt="Picture of Darin" className="about-me-pic col-md-3" title="Picture of Darin"></img>
	           		<h3 className="col-md-9">
	        		Hard-working, dedicated software analyst with a passion for
	        		collaboration, efficiency, and training.
	        		</h3>
		        </div>
		        		        	
	        	<p class="about-paragraph" id="about-paragraph-1">
	        	Since 2010 I have been working in the healthcare IT industry with a focus on implementing 
	        	electronic medical records.  I have focused on the installation of <a href="https://www.epic.com">Epic's</a> home 
	        	health and hospice billing applications.
	        	</p>

	        	<p class="about-paragraph" id="about-paragraph-2">
	        	Configuring the software at multiple healthcare organizations has made me passionate about helping
	        	others and about learning more about software development.  I aim to expand my horizons
	        	and use my skills to produce interactive webistes that continue to help users in various
	        	domains: healthcare, religious, music, lifestyle.
	        	</p>

	        	<p class="about-paragraph" id="about-paragraph-3">
	        	I hope you'll take a look at my projects and use the <Link to='/contact/'>contact</Link> form
	        	to <a href="mailto:dchennigh@gmail.com">get in touch</a>.
	        	</p>
            </div>
        )
    }
}

export default AboutMe