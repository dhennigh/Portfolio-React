import React from "react"
import Social from "./Social"
import Navbar from "./Navbar"
import Introduction from "./Introduction"
import Resume from "./Resume"
import ContactFormComponent from "./ContactFormComponent"

import './style.css';

class App extends React.Component {
    render() {
        return (
            <div>
            	<Navbar />
            	<Introduction />
            	<Resume />
            	<ContactFormComponent />
            </div>
        )
    }
}

export default App