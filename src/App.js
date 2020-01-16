import React from "react"
import Social from "./Social"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Introduction from "./Introduction"
import ContactFormComponent from "./ContactFormComponent"
import AboutMe from "./AboutMe"
import Portfolio from "./Portfolio"
import Pdf from "./Resume.pdf"
import Resume from "./Resume"


import './style.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'


class App extends React.Component {
    render() {
        return (
            <div>
            	<Router>
            		<Navbar />
					<Switch>
						<Route exact path='/' component={Introduction} />
	    		        <Route exact path='/about/' component={AboutMe} />
	    		        <Route path='/portfolio/' component={Portfolio} />
	    		        <Route path='/contact/' component={ContactFormComponent} />
	    		        <Route path='/resume/' component={Pdf} />
					</Switch>
				    <Footer />
				</Router>
            </div>
        )
    }
}

export default App