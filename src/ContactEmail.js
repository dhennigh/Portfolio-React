import React from "react"

class ContactEmail extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
    	email: '',
    }

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
  	}

	handleChangeEmail(event) {
		this.setState({email: event.target.email});
	}

  	render() {
	    return (
	    	<div className="container">
		        	<label className="row">
		        	<span className="contact-label col-md-1">
		        	E-mail:
		        	</span>
		        	<input type="text" email={this.state.email} className="form-control col-md-4" onChange={this.handleChangeEmail} placeholder="your@email.com" />
		        	</label>
		    </div>
	    );
  	}
}

export default ContactEmail