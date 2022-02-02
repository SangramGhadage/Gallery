import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
// import CollectionsIcon from '@mui/icons-material/Collections';

const UseStyles = makeStyles({
    component:{
        background: '#63646af2'
    }
})

const Navbar = () =>{
    const  classes = UseStyles();
    return (
        <AppBar className={classes.component} position='static'>
            <Toolbar>
                {/* <CollectionsIcon/> */}
                <Typography variant='h5' style={{marginLeft: 30}}>Gallery</Typography>
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;