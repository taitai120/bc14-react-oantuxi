import React, { Component } from 'react';
import './style.css';
import Player from './Player';
import Computer from './Computer';
import Result from './Result';
import { connect } from 'react-redux';

class OanTuXi extends Component {
    render() {
        return (
            <div className="game">
                <div className="row text-center mt-5">
                    <div className="col-4 mt-3">
                        <Player />
                    </div>
                    <div className="col-4 mt-3">
                        <Result />
                        <button className="btn btn-success p-2 display-4 mt-5" onClick={() => {
                            this.props.playGame()
                        }}>Play Game</button>
                    </div>
                    <div className="col-4 mt-3">
                        <Computer />
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProp = dispatch => {
    return {
        playGame: () => {
            let count = 0;
            let timer = setInterval(() => {
                count++;
                dispatch({
                    type: 'PLAY',
                });
                if (count >= 10) {
                    clearInterval(timer);
    
                    dispatch({
                        type: 'END',
                    });
                }
            }, 100);
        },
    }
};

export default connect(null, mapDispatchToProp)(OanTuXi);