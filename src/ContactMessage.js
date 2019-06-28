import React from "react"

class ContactMessage extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
    	message: '',
    }

    this.handleChangeMessage = this.handleChangeMessage.bind(this);
  	}

	handleChangeMessage(event) {
		this.setState({message: event.target.message});
	}

  	render() {
	    return (
	    	<div class="col-md-6">
	        	<label className="form-label">Drop me a line:</label>
			    <textarea
			    	onChange={this.handleChangeMessage}
			    	className="contact-message"
			    	rows="10"
			    	cols="50"
			    	placeholder="Write your message here."
			    />
		    </div>
	    );
  	}
}

export default ContactMessage