import React, { Component } from 'react';
import { connect } from 'react-redux';

class Computer extends Component {
    render() {
        const { computer } = this.props;
        let keyframe = `@keyframes move${Date.now()} {
            0% {
                left: 20%;
            }
            50% {
                left: 80%;  
            }
            100% {
                left: 20%;
            }
        }`;

        return (
            <div>
                <div className="text-center playerContainer">
                    <style>
                        {keyframe}
                    </style>

                    <div className="theThink">
                        <img style={{animation: `move${Date.now()} 0.1s`}} className="computer mt-3" width={100} height={100} src={computer.image} alt={computer.image} />
                    </div>

                    <div className="speech-bubble"></div>
                    <img className="my-3" style={{width: 120, height: 120}} src="./img/playerComputer.png" alt="./img/playerComputer.png" />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        computer: state.GameReducer.computer,
    };
}

export default connect(mapStateToProps)(Computer);