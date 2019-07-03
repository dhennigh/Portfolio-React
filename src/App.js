import React from "react"
import Social from "./Social"
import Contact from "./Contact"
import './style.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <Social />
                <Contact />
            </div>
        )
    }
}

export default App