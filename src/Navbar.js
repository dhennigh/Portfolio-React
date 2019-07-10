import React from "react"
import App from "./App"
import AboutMe from "./AboutMe"
import Portfolio from "./Portfolio"
import ContactFormComponent from "./ContactFormComponent"
import {BrowserRouter as Router, Route, Link} from "react-router-dom"


class Navbar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            style: {
                display: 'none'
            }
        }

        this.burgerToggle = this.burgerToggle.bind(this)
    }

    burgerToggle = () => {
        if (this.state.style.display === 'none') {
            this.setState({style: {display: 'block'}})
        } else {
            this.setState({style: {display: 'none'}})
        }
    }

    render() {
        return (
            <Router>
                <div>
                	<nav>
                        <div className="navWide">
                            <div className="wideDiv">
                                <Link to='/' className="text-info nav-link-wide">Home</Link>
                                <a href="#" className="text-info nav-link-wide">Portfolio</a>
                                <Link to='/about/' className="text-info nav-link-wide">About</Link>
                                <a href="#" className="text-info nav-link-wide">Contact</a>
                            </div>
                        </div>
                        <div className="navNarrow">
                            <i className="fa fa-bars fa-2x hamburger" onClick={this.burgerToggle}></i>
                            <div>
                                <ul className="narrowLinks" style={this.state.style}>
                                    <li><Link to='/' className="text-info nav-link-narrow">Home</Link></li>
                                    <li><a href="#" className="text-info nav-link-narrow">Portfolio</a></li>
                                    <li><Link to='/about/' className="text-info nav-link-narrow">About</Link></li>
                                    <li><a href="#" className="text-info nav-link-narrow">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                	</nav>
                    <Route exact path='/' component={App} />
                    <Route path='/about/' component={AboutMe} />
                </div>
            </Router>
        )
    }
}

export default Navbar