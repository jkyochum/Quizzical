import React, { useState, useEffect } from "react"
import "../sass/styles.scss"
import FrontPage from "./FrontPage"

export default function App() {
    const [frontPageActive, setFrontPageActive] = useState(true)

    function toggleFrontPage() {
        setFrontPageActive(previousValue => !previousValue)
    }

    return (
        <div>
            <img className="yellow-blob" src="./images/blob-yellow.png" alt="yellow blob" />
            {frontPageActive && <FrontPage toggleFrontPage={toggleFrontPage} />}
            <img className="blue-blob" src="./images/blob-blue.png" alt="blue blob" />
        </div>
    )
}