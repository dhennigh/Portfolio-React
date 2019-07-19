import React from "react"

class ContactName extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
    	name: '',
    }

    this.handleChangeName = this.handleChangeName.bind(this);
  	}

	handleChangeName(event) {
		this.setState({name: event.target.name});
	}

  	render() {
	    return (
	    	<div className="container">
	        	<label className="row">
	        	<span className="contact-label col-md-1">
	        	Name:
	        	</span>
	        	<input type="text" name={this.state.name} className="form-control col-md-4" onChange={this.handleChangeName} placeholder="Name" />
	        	</label>
		    </div>
	    );
  	}
}

export default ContactName