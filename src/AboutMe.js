import React from "react"

class AboutMe extends React.Component {
    render() {
        return (
            <div>
            	<blockquote class="about-headline">
	        		<h3>
	        		Hard-working, dedicated software analyst with a passion for collaboration, efficiency, and training.
	        		</h3>
	        	</blockquote>
	        	
	        	<p class="about-paragraph" id="about-paragraph-1">
	        	Since 2010 I have been working in the healthcare IT industry with a focus on implementing 
	        	electronic medical records.  I have focused on the installation of 
	        	<a href="https://www.epic.com">Epics</a> home health and hospice billing applications.
	        	</p>

	        	<p class="about-paragraph" id="about-paragraph-2">
	        	Configuring the software at multiple health organizations has made me passionate about helping
	        	others and about learning more about software development.  I aim to expand my horizons
	        	and use my skills to produce interactive webistes that continue to help users in various
	        	domains: healthcare, religious, music, lifestyle.
	        	</p>

	        	<p class="about-paragraph" id="about-paragraph-3">
	        	I hope you'll take a look at my projects and use the <a href="<Contact />">contact</a>
	        	form to <a href="mailto:dchennigh@gmail.com">get in touch</a>.
	        	</p>
            </div>
        )
    }
}

export default AboutMe