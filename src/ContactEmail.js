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
		    	<div className="row">
		        	<label>
		        	<span className="contact-label col-md-3">
		        	E-mail:
		        	</span>
		        	<span className="col-md-4">
		        	<input type="text" email={this.state.email} onChange={this.handleChangeEmail} placeholder="your@email.com" />
		        	</span>
		        	</label>
		        </div>
		    </div>
	    );
  	}
}

export default ContactEmail