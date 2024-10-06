import React, { Component } from 'react';
import '../App.css'

class Score extends Component {
    render() {
        const { score, onNextQuestion } = this.props;

        return (
            <div className='text-center'>
                <h2>Results</h2>
                <h4>Your score: {score}</h4>
                <button className="btn btn-light me-4 rounded-pill px-4 py-2 " ><a className="nav-link" href="./quiz">Exit Quiz</a></button>
            </div>
        );
    }
}

export default Score;
