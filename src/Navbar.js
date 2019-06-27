import React from "react"
import Home from "./Home"
import About from "./About"
import Portfolio from "./Portfolio"
import Contact from "./Contact"

class Navbar extends React.Component {
    render() {
        return (
            <div>
            	<nav class="navbar">
            		<div id="navbarNav">
            			<ul>
            				<li>
            				<Home />
            				</li>
            				<li>
            				<About />
            				</li>
            				<li>
            				<Portfolio />
            				</li>
            				<li>
            				<Contact />
            				</li>
            			</ul>
            		</div>
            	</nav>
            </div>
        )
    }
}

export default Navbar