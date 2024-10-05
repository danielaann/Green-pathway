import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Question from "../component/Question";
import energybank from "../Questions/Questionbank1";
import Score from "../component/Score";

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionBank: energybank,
            currentQuestion: 0,
            selectedOption: "",
            score: 0,
            quizEnd: false,
        };
    }

    handleOptionChange = (e) => {
        this.setState({ selectedOption: e.target.value });
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.checkAnswer();
        this.handleNextQuestion();
    };

    checkAnswer = () => {
        const { questionBank, currentQuestion, selectedOption, score } = this.state;
        if (selectedOption === questionBank[currentQuestion].answer) {
            this.setState((prevState) => ({ score: prevState.score + 1 }));
        }
    };

    handleNextQuestion = () => {
        const { questionBank, currentQuestion } = this.state;
        if (currentQuestion + 1 < questionBank.length) {
            this.setState((prevState) => ({
                currentQuestion: prevState.currentQuestion + 1,
                selectedOption: "",
            }));
        } else {
            this.setState({
                quizEnd: true,
            });
        }
    };

    render() {
        const { questionBank, currentQuestion, selectedOption, score, quizEnd } =
            this.state;
        return (<>
            <div className="container" style={{paddingTop:'10%'}}>
                <h1 className="diaplay-4 fw-4 text-center"><i>Quiz Time</i></h1>
                <br/><br/>

                {!quizEnd ? (
                    <Question 
                        question={questionBank[currentQuestion]}
                        selectedOption={selectedOption}
                        onOptionChange={this.handleOptionChange}
                        onSubmit={this.handleFormSubmit}
                    />
                ) : (
                    <Score
                        score={score}
                        onNextQuestion={this.handleNextQuestion}
                        className="score"
                    />
                )}
            </div>
           </> 
        );
    }
}
export default Quiz;
