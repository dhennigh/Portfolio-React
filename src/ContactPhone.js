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
	    		<div className="row">
		        	<label>
     		    	<span className="col-md-3">
		        	Phone:
		        	</span>
		        	<span className="col-md-4">
		        	<input type="text" phone={this.state.phone} onChange={this.handleChangePhone} placeholder="555-555-5555" />
		        	</span>
		        	</label>
	        	</div>
		    </div>
	    );
  	}
}

export default ContactPhone