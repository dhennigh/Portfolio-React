import React from "react"

class ContactPhone extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
    	phone: '',
    }

    this.handleChangePhone = this.handleChangePhone.bind(this);
  	}

	handleChangePhone(event) {
		this.setState({phone: event.target.phone});
	}

  	render() {
	    return (
	    	<div className="container">
	        	<label className="row">
 		    	<span className="contact-label col-md-1">
	        	Phone:
	        	</span>
	        	<input type="text" phone={this.state.phone} className="form-control col-md-4" onChange={this.handleChangePhone} placeholder="555-555-5555" />
	        	</label>
		    </div>
	    );
  	}
}

export default ContactPhone