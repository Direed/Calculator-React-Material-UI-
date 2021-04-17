import React from 'react';
import EntryField from "./EntryField";
import Buttons from "./Buttons";
import Story from "./Story";
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import TextField from '@material-ui/core/TextField';

const useStyles = {
    box: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#FF8181",
    },
    box_dark_theme: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#505050",
    },
    story: {
        backgroundColor: "#FF8181",
    },
    story_dark_theme: {
        backgroundColor: "#505050",
    },
    containerForField: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FF8181",
    },
    containerForField_dark_theme: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#505050",
    },
    entryField: {
        borderRadius: "15%",
    }
};


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
            strCalculation: '',
            masCalculations: [],
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
                this.analiseOperation(this.state.lastOperation)
                this.setState({
                    lastOperation: e.currentTarget.value,
                    statusCalculator: 'work',
                })
                break;
            case "*":
                this.analiseOperation(this.state.lastOperation)
                this.setState({
                    lastOperation: e.currentTarget.value,
                    statusCalculator: 'work',
                })
                break;
            case "-":
                this.analiseOperation(this.state.lastOperation)
                this.setState({
                    lastOperation: e.currentTarget.value,
                    statusCalculator: 'work',
                })
                break;
            case "+":
                this.analiseOperation(this.state.lastOperation)
                this.setState({
                    lastOperation: e.currentTarget.value,
                    statusCalculator: 'work',
                })
                this.setState((state) => {
                    return {
                    strCalculation: state.strCalculation + ' ' + state.lastOperation + ' ',
                    }
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
                                    firstValue: Number(state.firstValue) + Number(state.value),
                                }
                            })
                            this.setState((state) => {
                                return {
                                    strCalculation: state.strCalculation + state.value + ' = ' + state.firstValue,
                                    value: state.firstValue,
                                }
                            })
                            this.setState((state) => {
                                return {
                                    masCalculations: [...state.masCalculations, state.strCalculation],
                                    strCalculation: '',
                                }
                            })
                            console.log(this.state.strCalculation);
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

    analiseOperation(lastOperation){
        if(lastOperation!=''){
            switch(lastOperation){
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
                            firstValue: Number(state.firstValue) + Number(state.value),
                            strCalculation: state.strCalculation + state.value,
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
                    strCalculation: state.strCalculation + state.value,
                }
            })
            this.setState({
                value: '',
            })
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
        const { classes } = this.props;
        const masButton = this.state.masButton;
        const values = this.state.value;
        const boxClass = this.props.checkedSwitch ? classes.box_dark_theme : classes.box;
        const containerForFieldClass = this.props.checkedSwitch ? classes.containerForField_dark_theme : classes.containerForField;
        const storyClass = this.props.checkedSwitch ? classes.story_dark_theme : classes.story;
        return(
            <Box className={boxClass}>
            <Box className={containerForFieldClass}>
                <EntryField values = {values}></EntryField>
                <Buttons values = {values} masButton = {masButton} changeValueWithButton={this.changeValueWithButton} doingOperation={this.doingOperation}></Buttons>
            </Box>
            <Box className={storyClass}>
                <Story checkedSwitch={this.props.checkedSwitch} masCalculations = {this.state.masCalculations} ></Story>
            </Box>
            </Box>
        )
    }
}

export default withStyles(useStyles)(Calculator);