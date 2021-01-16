import React  from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
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


class EntryField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }


    render() {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        let values = this.props.values;
        return (
            <Box id="input" >
                <TextField id="outlined-basic" label="Enter:" variant="outlined" className='gg' value={values} onChange={this.props.changeValue}/>
            </Box>
        )
    }
}

export default EntryField;