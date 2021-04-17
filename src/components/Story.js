import React from 'react';
import Box from "@material-ui/core/Box";
import HistoryIcon from '@material-ui/icons/History';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

const useStyle = makeStyles((theme) => ({
    storage: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
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
    operationTitle: {
        flexGrow: 1,
        backgroundColor: "#FF8181",
        color: "#000000",
        marginLeft: theme.spacing(8),
    },
    operationTitle_dark_theme: {
        flexGrow: 1,
        backgroundColor: "#505050",
        color: "#ffffff",
        marginLeft: theme.spacing(8),
    },
    shit: {
        backgroundColor: "#FF8181",
        color: "#000000",
        marginLeft: theme.spacing(8),
    },
    shit_dark_theme: {
        backgroundColor: "#505050",
        color: "#ffffff",
        marginLeft: theme.spacing(8),
    }
}));
class Story extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        //const {classes} = this.props;
        //const boxOperationsClass = this.props.checkedSwitch ? classes.boxOparations_dark_theme : classes.boxOparations;
        //const operationsClass = this.props.checkedSwitch ? classes.operationTitle_dark_theme : classes.operationTitle;
        return (
            <div /*className={boxOperationsClass}*/>
            <StorageNavBar checkedSwitch = {this.props.checkedSwitch}></StorageNavBar>
            <ListOperations masCalculations = {this.props.masCalculations} checkedSwitch = {this.props.checkedSwitch} ></ListOperations>
            </div>
        );
    }
}

function StorageNavBar(props){
    const classes = useStyle();
    const menuClass = props.checkedSwitch ? classes.menu_dark_theme : classes.menu;
    const menuButtonClass = props.checkedSwitch ? classes.menuButton_dark_theme : classes.menuButton;
    const titleClass = props.checkedSwitch ? classes.title_dark_theme : classes.title;
    return(
                <AppBar position="static" className={menuClass}>
                    <Toolbar>
                        <IconButton className={menuButtonClass} edge="start" color="inherit" aria-label="menu" aria-controls="simple-menu" aria-haspopup="true">
                            <HistoryIcon fontSize='large'></HistoryIcon>
                        </IconButton>
                        <Typography variant="h6" className={titleClass}>
                            Storage
                        </Typography>
                    </Toolbar>
                </AppBar>
    );
}

function ListOperations(props){
    const classes = useStyle();
    const listOperations = props.masCalculations.map( (operation) => {
        return <Typography varian="h6" className={props.checkedSwitch ? classes.shit_dark_theme : classes.shit}>{operation}</Typography>
    })
    return listOperations;
}

export default Story;