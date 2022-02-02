import {Box, makeStyles, TextField} from '@material-ui/core';

const UseStyles = makeStyles(theme =>({
    component:{
        background: '#F6F6F6',
        '& > *': {
            margin:theme.spacing(2)
        }
    }
}))

const Breadcrumb =({onTextChange, onCountChange}) =>{
    const  classes = UseStyles();
    return (
        <Box m={2} className={classes.component}>
            <TextField 
                label= "Search Image"
                onChange={(e) => onTextChange (e.target.value)}
            />
            <TextField 
                label= "Number of Images"
                onChange={(e) => onCountChange (e.target.value)}
            />
        </Box>
        
    )
}

export default Breadcrumb;