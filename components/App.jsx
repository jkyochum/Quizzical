import "../sass/styles.scss"
import FrontPage from "./FrontPage"

export default function App() {

    return (
        <div>
            <img className="yellow-blob" src="./images/blob-yellow.png" alt="yellow blob" />
            <FrontPage />
            <img className="blue-blob" src="./images/blob-blue.png" alt="blue blob" />
        </div>
    )
}