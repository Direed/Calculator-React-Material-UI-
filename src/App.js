import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import TextField from '@material-ui/core/TextField';

import Calculator from "./components/Calculator";

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "center",
    },
    time: {
      paddingLeft: '15px',
    },
    buttons: {
        display: 'grid',
        gridTemplateColumns: "80px 80px 80px 80px",
        justifyItems: "center",
        alignItems: 'center',
    },
    button: {
        width: '50px',
        height: '50px',
        margin: "5px 0 5px 0",
    },
    field: {
        width: '350px',
    },
    box: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
});

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date : new Date(),
            value: 0,
            allValue: 0,
            number: 0,
            operation: '',

        }
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick(){
        this.setState({
            date: new Date(),
        })
    }

    render() {
        const number = this.state.number;
        return (
            <div className="App">
                <header className="App-header">
                    <Header date = {this.state.date}/>
                </header>
                <Calculator></Calculator>
            </div>
        );
    }
}
function Header(props) {
    const classes = useStyles();
    return (
        <Box className={classes.header}>
            <h1>Calculator</h1>
            <h1 className={classes.time} >{props.date.toLocaleTimeString()}</h1>
        </Box>
    );
}
export default App;
