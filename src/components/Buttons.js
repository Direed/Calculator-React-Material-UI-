import React  from 'react';
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
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
});


class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            masButton: props.masButton,
        }
    }


    render() {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const buttons = this.state.masButton.map( button => {
            return <Button variant={"contained"} className='gg' onClick={this.props.changeValueWithButton}  value={button}>{button}</Button>
        })
        return(
            <Box className='gg'>{buttons}</Box>
        )
    }
}

export default Buttons;