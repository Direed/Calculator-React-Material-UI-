import React  from 'react';
import { withStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";

const useStyles = {
    field: {
        width: '360px',
        backgroundColor: "#ffffff",
        borderRadius: "5px 5px 0px 0px",
    },
    box: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "20px",
        borderRadius: "50px",
    },
};


class EntryField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }


    render() {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { classes } = this.props;
        let values = this.props.values;
        return (
            <Box id="input" className={classes.box}>
                <TextField color="" id="filled-basic" label="Enter:" variant="filled" className={classes.field} value={values}/>
            </Box>
        )
    }
}

export default withStyles(useStyles)(EntryField);