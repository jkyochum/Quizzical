
export default function FrontPage(props) {


    return (
        <div className="front-page-wrapper">
            <h1 className="front-page-title">Quizzical</h1>
            <h2 className="front-page-description">Test your knowledge.</h2>
            <button
                className="control-button"
                onClick={props.toggleFrontPage}
            >
                Start quiz
            </button>
        </div >
    )
}