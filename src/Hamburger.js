import React from "react"

class ClosedButton extends React.Component {
	render() {
		return(
			<div>
            	<i className="fa fa-bars fa-2x hamburgerComponent" onClick={this.HamburgerToggle}></i>
            </div>
		)
	}
}

class OpenedButton extends React.Component {
	render() {
		return(
			<div>
            	<i className="far fa-window-close hamburgerComponent" onClick={this.HamburgerToggle}></i>
            </div>
		)
	}
}

class Hamburger extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isOpen: false,
		}
		this.HamburgerToggle = this.HamburgerToggle.bind(this)
		this.menuButton
	}

	const menuButton

	HamburgerToggle() {
		this.setState((prevState) => {
			this.state.isOpen=!prevState.isOpen
		})
		
		if(this.state.isOpen === false) {
			menuButton = <ClosedButton />
		} else {
			menuButton = <OpenedButton />
		}
	}

    render() {
        return (
            <div>
            	{this.menuButton}
            	<i className="fa fa-bars fa-2x hamburgerComponent" onClick={this.HamburgerToggle}></i>
            	<i className="far fa-window-close"></i>
            </div>
        )
    }
}

export default { Hamburger, ClosedButton, OpenedButton }