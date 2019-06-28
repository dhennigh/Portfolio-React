import React from "react"
import ContactName from "./ContactName"
import ContactEmail from "./ContactEmail"
import ContactPhone from "./ContactPhone"
import ContactMessage from "./ContactMessage"

class Contact extends React.Component {
  constructor(props) {
  this.handleSubmit = this.handleSubmit.bind(this);
  }

	handleSubmit(event) {
    	alert('The contact form has been submitted.  We will reach out shortly.');
    	event.preventDefault();
  	}

  	render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <ContactName />
            <ContactEmail />
            <ContactPhone />
            <ContactMessage />
            <input type="submit" value="Submit" class="btn btn-primary" />
          </form>
        </div>
	    );
  	}
}

export default Contact