import { makeStyles, Snackbar,} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert'

const useStyles =makeStyles({
    snack: {
        '& > *': {
            color: '#fff',
            background: '#080808f2'
        }
    }
})

const SnackBar = ({open, toggleSnack}) =>{

    const classes = useStyles();

    const handleClose = () =>{
        toggleSnack(false);
    }
    return(
        <Snackbar className={classes.snack} open={open} autoHideDuration={4000} onClose={handleClose}>
            <MuiAlert severity='info' onClose={handleClose}>
                Number of Images shoud be between 3 and 200
            </MuiAlert>
        </Snackbar>
    )
}

export default SnackBar;