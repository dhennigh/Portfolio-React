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
	    		<div className="row">
		        	<label>
		        	<span className="contact-label col-md-3">
		        	Name:
		        	</span>
		        	<span className="col-md-4">
		        	<input type="text" name={this.state.name} onChange={this.handleChangeName} placeholder="Name" />
		        	</span>
		        	</label>
		        </div>
		    </div>
	    );
  	}
}

export default ContactName