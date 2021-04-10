import React  from 'react';
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {withStyles} from "@material-ui/styles";

const useStyles = {
    buttons: {
        display: 'grid',
        gridTemplateColumns: "90px 90px 90px 90px",
        justifyItems: "center",
        alignItems: 'center',
    },
    button: {
        width: '50px',
        height: '50px',
        margin: "0 0 20px 0",
    },
};


class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            masButton: props.masButton,
        }
    }


    render() {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const {classes} = this.props;
        const buttons = this.state.masButton.map( button => {
            if(typeof button != 'string'){
                return <Button variant={"contained"} className={classes.button} onClick={this.props.changeValueWithButton}  value={button}>{button}</Button>
            }
            else return <Button variant={"contained"} className={classes.button} onClick={this.props.doingOperation}  value={button}>{button}</Button>
        })
        return(
            <Box className={classes.buttons}>{buttons}</Box>
        )
    }
}

export default withStyles(useStyles)(Buttons);