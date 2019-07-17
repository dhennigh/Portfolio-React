import React from "react"
import App from "./App"
import AboutMe from "./AboutMe"
import Portfolio from "./Portfolio"
import ContactFormComponent from "./ContactFormComponent"
import Pdf from "./Resume.pdf"

import { Link } from 'react-router-dom'


class Navbar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            style: {
                display: 'none'
            },
            isOpen: false,
        }

        this.burgerToggle = this.burgerToggle.bind(this)
    }

    burgerToggle = () => {
        if (this.state.style.display === 'none') {
            this.setState({style: {display: 'block'}})
        } else {
            this.setState({style: {display: 'none'}})
        }
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        const iconClassName = this.state.isOpen ? "far fa-window-close fa-2x" : "fa fa-bars fa-2x"

        return (
            <div>
            	<nav>
                    <div className="navWide">
                        <div className="wideDiv">
                            <Link to='/' className="text-info nav-link-wide">Home</Link>
                            <Link to='/portfolio/' className="text-info nav-link-wide">Portfolio</Link>
                            <Link to='/about/' className="text-info nav-link-wide">About</Link>
                            <Link to='/contact/' className="text-info nav-link-wide">Contact</Link>
                            <a href={ Pdf } target="_blank" className="text-info nav-link-wide">Resume</a>
                        </div>
                    </div>
                    <div className="navNarrow sticky-top">
                        <i className={`${iconClassName} hamburger`} onClick={this.burgerToggle}></i>
                        <div className="nav-narrow-explanded-list">
                            <ul className="narrowLinks" style={this.state.style}>
                                <li><Link to='/' className="text-info nav-link-narrow">Home</Link></li>
                                <li><Link to='/portfolio/' className="text-info nav-link-narrow">Portfolio</Link></li>
                                <li><Link to='/about/' className="text-info nav-link-narrow">About</Link></li>
                                <li><Link to='/contact/' className="text-info nav-link-narrow">Contact</Link></li>
                                <li><a href={ Pdf } target='_blank' className="text-info nav-link-narrow">Resume</a></li>
                            </ul>
                        </div>
                    </div>
            	</nav>
            </div>
        )
    }
}

export default Navbar