import React from "react"

class ContactEmail extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
    	email: '',
    }

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
  	}

	handleChangeName(event) {
		this.setState({email: event.target.email});
	}

  	render() {
	    return (
	    	<div class="col-md-6">
	        	<label>
	        	E-mail:
	        	<input type="text" email={this.state.email} onChange={this.handleChangeEmail} />
	        	</label>
		    </div>
	    );
  	}
}

export default ContactEmail