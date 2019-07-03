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
	    	<div class="col-md-6">
	        	<label>
	        	Phone:
	        	<input type="text" phone={this.state.phone} onChange={this.handleChangePhone} />
	        	</label>
		    </div>
	    );
  	}
}

export default ContactPhone