import React from "react"
import App from "./App"
import AboutMe from "./AboutMe"
import Portfolio from "./Portfolio"
import ContactFormComponent from "./ContactFormComponent"


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
            <div>
            	<nav>
                    <div className="navWide">
                        <div className="wideDiv">
                            <Link to='/' className="text-info nav-link-wide">Home</Link>
                            <Link to='/portfolio/' className="text-info nav-link-wide">Portfolio</Link>
                            <Link to='/about/' className="text-info nav-link-wide">About</Link>
                            <Link to='/contact/' className="text-info nav-link-wide">Contact</Link>
                        </div>
                    </div>
                    <div className="navNarrow">
                        <i className="fa fa-bars fa-2x hamburger" onClick={this.burgerToggle}></i>
                        <div>
                            <ul className="narrowLinks" style={this.state.style}>
                                <li><Link to='/' className="text-info nav-link-narrow">Home</Link></li>
                                <li><Link to='/portfolio/' className="text-info nav-link-narrow">Portfolio</Link></li>
                                <li><Link to='/about/' className="text-info nav-link-narrow">About</Link></li>
                                <li><Link to='/contact/' className="text-info nav-link-narrow">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
            	</nav>
                <Route exact path='/' component={App} />
                <Route path='/about/' component={AboutMe} />
                <Route path='/portfolio/' component={Portfolio} />
                <Route path='/contact/' component={ContactFormComponent} />
            </div>
        )
    }
}

export default Navbar