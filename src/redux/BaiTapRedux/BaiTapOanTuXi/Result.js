import React, { Component } from 'react';
import { connect } from 'react-redux';

class Result extends Component {
    render() {
        const { resultMessage, winningScore, turn } = this.props;

        return (
            <div>
                <div className="display-4 text-warning">
                    {resultMessage}
                </div>
                <div className="display-4 text-success">
                Your score: {winningScore}
                </div>
                <div className="display-4 text-success">
                    Turn: {turn}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        resultMessage: state.GameReducer.resultMessage,
        winningScore: state.GameReducer.winningScore,
        turn: state.GameReducer.turn,
    }
};

export default connect(mapStateToProps)(Result);
