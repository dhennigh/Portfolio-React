import React from "react"
import ReactDOM from "react-dom"

import App from "./App"
import ContactFormComponent from "./ContactFormComponent"
import AboutMe from "./AboutMe"
import Portfolio from "./Portfolio"
import Navbar from "./Navbar"
import { Pdf } from "./Resume.pdf"

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

ReactDOM.render(
	<Router>
		<div>
			<Navbar />
			<Switch>
				<Route exact path='/' component={App} />
		        <Route path='/about/' component={AboutMe} />
		        <Route path='/portfolio/' component={Portfolio} />
		        <Route path='/contact/' component={ContactFormComponent} />
		        <Route path='/resume/' component={Pdf} />
		    </Switch>
	    </div>
	</Router>
, document.getElementById("root"))