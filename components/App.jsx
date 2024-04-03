import React, { useState, useEffect } from "react"
import "../sass/styles.scss"
import FrontPage from "./FrontPage"
import TriviaPage from "./TriviaPage"

export default function App() {
    const [frontPageActive, setFrontPageActive] = useState(false)
    const [quizData, setQuizData] = useState([])

    function toggleFrontPage() {
        setFrontPageActive(previousValue => !previousValue)
    }

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5')
            .then(res => res.json())
            .then(data => setQuizData(data))
            .catch(err => err.message)
    }, [])

    return (
        <div>
            <img
                className={`yellow-blob ${frontPageActive ? "yellow-blob-front-page" : "yellow-blob-active-game"}`}
                src="./images/blob-yellow.png"
                alt="yellow blob"
            />
            {frontPageActive && <FrontPage toggleFrontPage={toggleFrontPage} />}
            <TriviaPage quizData={quizData.results} />
            <img
                className={`blue-blob ${frontPageActive ? "blue-blob-front-page" : "blue-blob-active-game"}`}
                src="./images/blob-blue.png"
                alt="blue blob"
            />
        </div>
    )
}