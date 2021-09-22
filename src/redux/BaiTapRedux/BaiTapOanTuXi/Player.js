import React, { Component } from 'react';
import { connect } from 'react-redux';

class Player extends Component {
    render() {
        const { arrayInput } = this.props;
        return (
            <div>
                <div className="text-center playerContainer">
                    <div className="theThink">
                        <img style={{transform: 'rotateY(180deg)'}} className="mt-3" width={100} height={100} src={arrayInput.find((item) => item.check === true).image} alt={arrayInput.find((item) => item.check === true).image} />
                    </div>

                    <div className="speech-bubble"></div>
                    <img className="my-3" style={{width: 120, height: 120}} src="./img/player.png" alt="./img/player.png" />

                    <div className="row">
                        {arrayInput.map((item) => {
                            let border = null;
                            if (item.check) {
                                border = {border: '3px solid blue'};
                            }

                            return <div className="col-4">
                                        <button style={border} className="btnItem" onClick={() => {
                                            this.props.select(item.input);
                                        }}>
                                            <img src={item.image} alt={item.image} />
                                        </button>
                                    </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        arrayInput: state.GameReducer.arrayInput
    };
};

const mapDispatchToProps = dispatch => {
    return {
        select: (input) => {
            dispatch({
                type: 'SELECT',
                payload: input,
            })
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);