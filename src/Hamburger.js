import React from "react"

class Hamburger extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isOpen: false,
		}
		this.HamburgerToggle = this.HamburgerToggle.bind(this)
	}

    render() {
    	const iconClassName = this.state.isOpen ? "far fa-window-close fa-2x" : "fa fa-bars fa-2x"

    	console.log("I'm working")

        return (
            <div>
            	<i className={`${iconClassName} hamburger`} onClick={this.props.handleClick}></i>
            </div>
        )
    }
}

export default Hamburger