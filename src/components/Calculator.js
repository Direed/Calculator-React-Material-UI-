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
        this.changeValue = this.changeValue.bind(this);
        this.changeValueWithButton = this.changeValueWithButton.bind(this);
        this.state = {
            value: '',
            number: 0,
            masButton: [1,2,3,"+",4,5,6,"-",7,8,9,"*",0,"/","%","CE"],
        }
    }

    changeValue(e) {
        e.preventDefault();
        this.setState({
            value: e.target.value,
        })
        console.log(this.state.value);
    }

    changeValueWithButton(e){
        this.setState({number: e.currentTarget.value})
        this.setState((state) => {
            return {
            value: state.value + state.number,
        }});
        console.log(this.state.number)
        console.log(this.state.value)
    }


    render() {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const masButton = this.state.masButton;
        const values = this.state.value;
        return(
            <Box className='gg'>
                <EntryField values = {values} changeValue= {this.changeValue} ></EntryField>
                <Buttons values = {values} masButton = {masButton} changeValueWithButton={this.changeValueWithButton}></Buttons>
            </Box>
        )
    }
}

export default Calculator;