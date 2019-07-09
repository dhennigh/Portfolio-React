import React from "react"
import About from "./About"
import Portfolio from "./Portfolio"
import Contact from "./Contact"

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.burgerToggle = this.burgerToggle.bind(this)
    }

    burgerToggle = () => {
        let linksEl = document.querySelector('.narrowLinks');
        if (linksEl.style.display === 'block') {
            linksEl.style.display = 'none';
        } else {
            linksEl.style.display = 'block';
        }
    }

    render() {
        return (
            <div>
            	<nav>
                    <div className="navWide">
                        <div className="wideDiv">
                            <a href="#">Portfolio</a>
                            <a href="#">About</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                    <div className="navNarrow">
                        <i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
                        <div className="narrowLinks">
                            <a href="#" onClick={this.burgerToggle}>Portfolio</a>
                            <a href="#" onClick={this.burgerToggle}>About</a>
                            <a href="#" onClick={this.burgerToggle}>Contact</a>
                        </div>
                    </div>
            		{/*
                        <div id="navbarNav">
                			<ul>
                				<li>
                                Portfolio
                				</li>
                				<li>
                				About
                				</li>
                				<li>
                				Contact
                				</li>
                			</ul>
                        </div>
                    */}
            	</nav>
            </div>
        )
    }
}

export default Navbar