import React from "react"
import Social from "./Social"
import ContactFormComponent from "./ContactFormComponent"
import './style.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <Social />
                <ContactFormComponent />
            </div>
        )
    }
}

export default App