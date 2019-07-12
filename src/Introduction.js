import React from "react"

class Introduction extends React.Component {
    render() {
        return (
            <div className="intro">
            	<h1 className="intro-header1">
            		Hello, I'm Darin.
            	</h1>
            	<h2 className="intro-header2">
            		Software <span id="intro-emphasis1">analyst</span> by day, 
                    <br></br>
                    software <span id="intro-emphasis2">developer</span> by night.
            	</h2>
                <div className="intro-split">
                    <span className="intro-split"></span>
                </div>
                <h3 className="intro-paragraph">
                Thanks for visiting my site.
                </h3>
                <div className="spacer">
                    <span></span>
                </div>
                <h3 className="intro-paragraph"> Feel free to checkout my professional portfolio, have a look
                at my resume, and get in touch with me using the contact form.
                </h3>
                <div className="spacer">
                    <span></span>
                </div>
                <h3 className="intro-paragraph">
                Use the links at the bottom of the page to see my work and connect on social media.
                </h3>
            </div>
        )
    }
}

export default Introduction