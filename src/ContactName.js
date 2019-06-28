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
	    	<div class="col-md-6">
	        	<label>
	        	Name:
	        	<input type="text" name={this.state.name} onChange={this.handleChangeName} />
	        	</label>
		    </div>
	    );
  	}
}

export default ContactName