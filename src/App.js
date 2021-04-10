import logo from './logo.svg';
import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import Switch from "@material-ui/core/Switch";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Calculator from "./components/Calculator";

const useStyles = makeStyles((theme) => ({
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
        alignItems: "center",
        height: "60px",
        backgroundColor: "#FF8181",
        margin: "none",
    },
    header_dark_theme: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        height: "60px",
        backgroundColor: "#505050",
        margin: "none",
    },
    time: {
        color: "#000000",
    },
    time_dark_theme: {
        color: "#ffffff",
    },
    mainText: {
        paddingLeft: "15px",
        paddingRight: "15px",
        color: "#000000",
    },
    mainText_dark_theme: {
        paddingLeft: "15px",
        paddingRight: "15px",
        color: "#ffffff",
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
    menu: {
        backgroundColor: "#FF8181",
        boxShadow: "none",
        paddingBottom: theme.spacing(2),
    },
    menu_dark_theme: {
        backgroundColor: "#505050",
        boxShadow: "none",
        paddingBottom: theme.spacing(2),
    },
    menuButton: {
        marginRight: theme.spacing(0),
        marginLeft: theme.spacing(1),
        backgroundColor: "#FF8181",
        color: "#000000"
    },
    menuButton_dark_theme: {
        marginRight: theme.spacing(0),
        marginLeft: theme.spacing(1),
        backgroundColor: "#505050",
        color: "#ffffff",
    },
    title: {
        flexGrow: 1,
        backgroundColor: "#FF8181",
        color: "#000000",
    },
    title_dark_theme: {
        flexGrow: 1,
        backgroundColor: "#505050",
        color: "#ffffff",
    },
}));

class App extends React.Component {
    constructor(props) {
        super(props);
        this.enterSwitch = this.enterSwitch.bind(this);
        this.state = {
            date : new Date(),
            checkedSwitch: false,
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
    enterSwitch(){
        if(this.state.checkedSwitch === false){
            this.setState({
                checkedSwitch: true,
            })
        } else {
            this.setState({
                    checkedSwitch: false,
                })
        }
    }

    render() {
        return (
            <div>
                <Header date = {this.state.date} checkedSwitch={this.state.checkedSwitch} changeSwitch={this.enterSwitch}/>
                <NavBar checkedSwitch={this.state.checkedSwitch}></NavBar>
                <Calculator checkedSwitch={this.state.checkedSwitch}></Calculator>
            </div>
        );
    }
}
function Header(props) {
    const classes = useStyles();
    const headerClass = props.checkedSwitch ? classes.header_dark_theme : classes.header;
    const mainTextClass = props.checkedSwitch ? classes.mainText_dark_theme : classes.mainText;
    const timeClass = props.checkedSwitch ? classes.time_dark_theme : classes.time;
    return (
        <Box className={headerClass}>
            <Switch checked={props.checkedSwitch} name="checkedSwitch" onChange={props.changeSwitch}/>
            <h1 className={mainTextClass}>CALCULATOR</h1>
            <h3 className={timeClass} >{props.date.toLocaleTimeString(navigator.language,{hour: '2-digit', minute:'2-digit'})}</h3>
        </Box>
    );
}

function NavBar(props) {
    const classes = useStyles();
    const menuClass = props.checkedSwitch ? classes.menu_dark_theme : classes.menu;
    const menuButtonClass = props.checkedSwitch ? classes.menuButton_dark_theme : classes.menuButton;
    const titleClass = props.checkedSwitch ? classes.title_dark_theme : classes.title;
    return (
            <AppBar position="static" className={menuClass}>
                <Toolbar>
                    <IconButton edge="start" className={menuButtonClass} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={titleClass}>
                        Simple
                    </Typography>
                </Toolbar>
            </AppBar>
    );
}
export default App;
