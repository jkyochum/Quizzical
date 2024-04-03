
export default function TriviaPage(props) {
    const data = props.quizData
    console.log(data)
    const dataElements = data.map((datum) => <div>{datum.question}</div>)


    return (
        <div className="trivia-wrapper">
            {dataElements}
        </div>
    )
}