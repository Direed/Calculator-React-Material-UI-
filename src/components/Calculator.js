import React from 'react';
import EntryField from "./EntryField";
import Buttons from "./Buttons";
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    box: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
});


class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.changeValueWithButton = this.changeValueWithButton.bind(this);
        this.doingOperation = this.doingOperation.bind(this);
        this.state = {
            value: '',
            number: 0,
            firstValue: 0,
            secondValue: 1,
            lastOperation: '',
            statusCalculator: 'sleep',
            masButton: ['CE','x^2', '%', '/', 7,8,9,'*',4,5,6,'-',1,2,3,'+','+/-',0,'.','='],
        }
    }

    doingOperation(e){
        switch (e.currentTarget.value) {
            case "CE":
                this.setState({
                    value: '',
                    lastOperation: '',
                })
                break;
            case "x^2":
                this.setState((state) => {
                    return {
                        firstValue: Math.pow(state.value, 2),
                    }});
                this.setState((state) => {
                    return {
                        value: state.firstValue,
                    }});
                this.setState({
                    lastOperation: '',
                })
                break;
            case "%":
                this.setState((state) => {
                    return {
                        firstValue: state.value/100,
                    }
                })
                this.setState((state) => {
                    return {
                        value: state.firstValue,
                    }
                })
                this.setState({
                    lastOperation: '',
                })
                break;
            case "/":
                if(this.state.lastOperation!=''){
                    switch(this.state.lastOperation){
                        case '/':
                            this.setState((state) => {
                                return {
                                    firstValue: state.firstValue / state.value,
                                }
                            })
                            this.setState((state) => {
                                return {
                                    value: state.firstValue,
                                }
                            })
                            break;
                        case '*':
                            this.setState((state) => {
                                return {
                                    firstValue: state.firstValue * state.value,
                                }
                            })
                            this.setState((state) => {
                                return {
                                    value: state.firstValue,
                                }
                            })
                            break;
                        case '-':
                            this.setState((state) => {
                                return {
                                    firstValue: state.firstValue - state.value,
                                }
                            })
                            this.setState((state) => {
                                return {
                                    value: state.firstValue,
                                }
                            })
                            break;
                        case '+':
                            this.setState((state) => {
                                return {
                                    firstValue: state.firstValue + Number(state.value),
                                }
                            })
                            this.setState((state) => {
                                return {
                                    value: state.firstValue,
                                }
                            })
                            break;
                    }
                } else {
                    this.setState((state) => {
                        return {
                            firstValue: state.value,
                        }
                    });
                    this.setState({
                        value: '',
                    })
                }
                this.setState({
                    lastOperation: e.currentTarget.value,
                    statusCalculator: 'work',
                })
                break;
            case "*":
                if(this.state.lastOperation!=''){
                    switch(this.state.lastOperation){
                        case '/':
                            this.setState((state) => {
                                return {
                                    firstValue: state.firstValue / state.value,
                                }
                            })
                            this.setState((state) => {
                                return {
                                    value: state.firstValue,
                                }
                            })
                            break;
                        case '*':
                            this.setState((state) => {
                                return {
                                    firstValue: state.firstValue * state.value,
                                }
                            })
                            this.setState((state) => {
                                return {
                                    value: state.firstValue,
                                }
                            })
                            break;
                        case '-':
                            this.setState((state) => {
                                return {
                                    firstValue: state.firstValue - state.value,
                                }
                            })
                            this.setState((state) => {
                                return {
                                    value: state.firstValue,
                                }
                            })
                            break;
                        case '+':
                            this.setState((state) => {
                                return {
                                    firstValue: state.firstValue + Number(state.value),
                                }
                            })
                            this.setState((state) => {
                                return {
                                    value: state.firstValue,
                                }
                            })
                            break;
                    }
                } else {
                    this.setState((state) => {
                        return {
                            firstValue: state.value,
                        }
                    })
                    this.setState({
                        value: '',
                    })
                }
                this.setState({
                    lastOperation: e.currentTarget.value,
                    statusCalculator: 'work',
                })
                break;
            case "-":
                if(this.state.lastOperation!=''){
                    switch(this.state.lastOperation){
                        case '/':
                            this.setState((state) => {
                                return {
                                    firstValue: state.firstValue / state.value,
                                }
                            })
                            this.setState((state) => {
                                return {
                                    value: state.firstValue,
                                }
                            })
                            break;
                        case '*':
                            this.setState((state) => {
                                return {
                                    firstValue: state.firstValue * state.value,
                                }
                            })
                            this.setState((state) => {
                                return {
                                    value: state.firstValue,
                                }
                            })
                            break;
                        case '-':
                            this.setState((state) => {
                                return {
                                    firstValue: state.firstValue - state.value,
                                }
                            })
                            this.setState((state) => {
                                return {
                                    value: state.firstValue,
                                }
                            })
                            break;
                        case '+':
                            this.setState((state) => {
                                return {
                                    firstValue: state.firstValue + Number(state.value),
                                }
                            })
                            this.setState((state) => {
                                return {
                                    value: state.firstValue,
                                }
                            })
                            break;
                    }
                } else {
                    this.setState((state) => {
                        return {
                            firstValue: state.value,
                        }
                    })
                    this.setState({
                        value: '',
                    })
                }
                this.setState({
                    lastOperation: e.currentTarget.value,
                    statusCalculator: 'work',
                })
                break;
            case "+":
                if(this.state.lastOperation!=''){
                    switch(this.state.lastOperation){
                        case '/':
                            this.setState((state) => {
                                return {
                                    firstValue: state.firstValue / state.value,
                                }
                            })
                            this.setState((state) => {
                                return {
                                    value: state.firstValue,
                                }
                            })
                            break;
                        case '*':
                            this.setState((state) => {
                                return {
                                    firstValue: state.firstValue * state.value,
                                }
                            })
                            this.setState((state) => {
                                return {
                                    value: state.firstValue,
                                }
                            })
                            break;
                        case '-':
                            this.setState((state) => {
                                return {
                                    firstValue: state.firstValue - state.value,
                                }
                            })
                            this.setState((state) => {
                                return {
                                    value: state.firstValue,
                                }
                            })
                            break;
                        case '+':
                            this.setState((state) => {
                                return {
                                    firstValue: state.firstValue + Number(state.value),
                                }
                            })
                            this.setState((state) => {
                                return {
                                    value: state.firstValue,
                                }
                            })

                            break;
                    }
                } else {
                    this.setState((state) => {
                        return {
                            firstValue: Number(state.value),
                        }
                    })
                    this.setState({
                        value: '',
                    })
                }
                this.setState({
                    lastOperation: e.currentTarget.value,
                    statusCalculator: 'work',
                })
                break;
            case "+/-":

                break;
            case ".":

                break;
            case "=":
                if(this.state.lastOperation!=''){
                    switch(this.state.lastOperation){
                        case '/':
                            this.setState((state) => {
                                return {
                                    firstValue: state.firstValue / state.value,
                                }
                            })
                            this.setState((state) => {
                                return {
                                    value: state.firstValue,
                                }
                            })
                            break;
                        case '*':
                            this.setState((state) => {
                                return {
                                    firstValue: state.firstValue * state.value,
                                }
                            })
                            this.setState((state) => {
                                return {
                                    value: state.firstValue,
                                }
                            })
                            break;
                        case '-':
                            this.setState((state) => {
                                return {
                                    firstValue: state.firstValue - state.value,
                                }
                            })
                            this.setState((state) => {
                                return {
                                    value: state.firstValue,
                                }
                            })
                            break;
                        case '+':
                            this.setState((state) => {
                                return {
                                    firstValue: state.firstValue + Number(state.value),
                                }
                            })
                            this.setState((state) => {
                                return {
                                    value: state.firstValue,
                                }
                            })
                            break;
                    }
                } else {
                    this.setState((state) => {
                        return {
                            firstValue: state.value,
                        }
                    })
                }
                this.setState({
                    lastOperation: '',
                })
                break;
        }
    }
    changeValueWithButton(e){
        this.setState({number: e.currentTarget.value})
        if(this.state.statusCalculator === 'sleep'){
            this.setState((state) => {
                return {
                    value: state.value + state.number,
                }});
        } else {
            this.setState({
                value: '',
                statusCalculator: 'sleep',
            })
            this.setState((state) => {
                return {
                    value: state.value + state.number,
                }});
        }
    }


    render() {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const masButton = this.state.masButton;
        const values = this.state.value;
        return(
            <Box className='gg'>
                <EntryField values = {values}></EntryField>
                <Buttons values = {values} masButton = {masButton} changeValueWithButton={this.changeValueWithButton} doingOperation={this.doingOperation}></Buttons>
            </Box>
        )
    }
}

export default Calculator;