import React from "react"
import ContactName from "./ContactName"
import ContactEmail from "./ContactEmail"
import ContactPhone from "./ContactPhone"
import ContactMessage from "./ContactMessage"

class ContactFormComponent extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

	handleSubmit(event) {
    	alert('The contact form has been submitted.  We will reach out shortly.');
    	event.preventDefault();
  	}

  	render() {
      return (
        <div className="container contact-form-components">
          <h2 className="contact-form-heading">
          Contact Me
          </h2>
          <form onSubmit={this.handleSubmit}>
            <ContactName />
            <ContactEmail />
            <ContactPhone />
            <ContactMessage />
            <input type="submit" value="Submit" className="btn contact-submit-button"/>
            <input type="reset" value="Clear Form" className="btn btn-secondary contact-clear-button"/>
          </form>
        </div>
	    );
  	}
}

export default ContactFormComponent