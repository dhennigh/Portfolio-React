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
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        const iconClassName = this.state.isOpen ? "far fa-window-close fa-2x" : "fa fa-bars fa-2x"

        const burgerActive = this.state.isOpen ? {display: 'block'} : {display: 'none'}

        const closeHamburger = () => {
            this.setState({
                isOpen: false,
            })
        }

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
                            <ul className="narrowLinks" style={burgerActive}>
                                <li><Link to='/' className="text-info nav-link-narrow" onClick={closeHamburger}>Home</Link></li>
                                <li><Link to='/portfolio/' className="text-info nav-link-narrow" onClick={closeHamburger}>Portfolio</Link></li>
                                <li><Link to='/about/' className="text-info nav-link-narrow" onClick={closeHamburger}>About</Link></li>
                                <li><Link to='/contact/' className="text-info nav-link-narrow" onClick={closeHamburger}>Contact</Link></li>
                                <li><a href={ Pdf } target='_blank' className="text-info nav-link-narrow" onClick={closeHamburger}>Resume</a></li>
                            </ul>
                        </div>
                    </div>
            	</nav>
            </div>
        )
    }
}

export default Navbar