import { act } from "react-dom/test-utils";

const stateDefault = {
    arrayInput: [
        {input: 'keo', image: './img/keo.png', check: false},
        {input: 'bua', image: './img/bua.png', check: false},
        {input: 'bao', image: './img/bao.png', check: true},
    ],
    resultMessage: `Welcome!`,
    winningScore: 0,
    turn: 0,
    computer: {input: 'keo', image: './img/keo.png'},
};

const GameReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case 'SELECT': {
            let arrInput = [ ...state.arrayInput ];
            arrInput = arrInput.map((input) => {
                return { ...input,check: false };
            });

            let index = arrInput.findIndex((item) => {
                return item.input === action.payload;
            });

            if (index !== -1) {
                arrInput[index].check = true;
            }
            state.arrayInput = arrInput;
            
            return { ...state };
        }
        
        case 'PLAY': {
            let randomIndex = Math.floor(Math.random() * 3);
            let randomInput = state.arrayInput[randomIndex];
            state.computer = randomInput;

            return { ...state };
        }

        case 'END': {
            let player = state.arrayInput.find((item) => item.check === true);
            let computer = state.computer;

            switch(player.input) {
                case 'keo': {
                    if (player.input === computer.input) {
                        state.resultMessage = `Draw! Click Play Button To Continue!`;
                        state.winningScore++;
                        state.turn++;
                    }
                    else if (computer.input === 'bua') {
                        state.resultMessage = `You Lost! Click Play Button To Continue!`;
                        state.turn++;
                    }
                    else {
                        state.resultMessage = `You Win! Click Play Button To Continue!`;
                        state.winningScore += 3;
                        state.turn++;
                    }
                    break;
                }

                case 'bua': {
                    if (player.input === computer.input) {
                        state.resultMessage = `Draw! Click Play Button To Continue!`;
                        state.winningScore++;
                        state.turn++;
                    }
                    else if (computer.input === 'bao') {
                        state.resultMessage = `You Lost! Click Play Button To Continue!`;
                        state.turn++;
                    }
                    else {
                        state.resultMessage = `You Win! Click Play Button To Continue!`;
                        state.winningScore += 3;
                        state.turn++;
                    }
                    break;
                }

                case 'bao': {
                    if (player.input === computer.input) {
                        state.resultMessage = `Draw! Click Play Button To Continue!`;
                        state.winningScore++;
                        state.turn++;
                    }
                    else if (computer.input === 'keo') {
                        state.resultMessage = `You Lost! Click Play Button To Continue!`;
                        state.turn++;
                    }
                    else {
                        state.resultMessage = `You Win! Click Play Button To Continue!`;
                        state.winningScore += 3;
                        state.turn++;
                    }
                    break;
                }

                default: ;
            }

            return { ...state };
        }

        default: return { ...state };
    }
};

export default GameReducer;