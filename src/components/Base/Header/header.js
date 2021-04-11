import React from 'react';
import './header.css';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

const Header = () => {
    const classes = useStyles();

    return ( 
        <>
        <div className= "header">
        <div>
        {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
            <TextField style={{border:"none"}}
             className={classes.margin}
             id="input-with-icon-textfield"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon style= {{fill: '#18d0d7'}} />
            </InputAdornment>
          ),
        }}
      />
        </div>

        <div className= "header-content">
          BLOCO
        </div>

        <div style= {{display: 'flex', justifyContent: 'space-between', width: '20%'}}>
          <div style={{color: '#dedee0', fontSize: '11px', position: 'relative', bottom: '4px', fontWeight: 600}}>
            Promote your event
            <span>
              <FlashOnIcon style= {{fill: '#18d0d7', fontSize: '23px', position: 'relative', top: '8px', marginLeft: '4px'}} />
            </span>
          </div>

          <div style={{color: '#dedee0', fontSize: '11px', marginTop: '6px', fontWeight: 600}}>
            Sign In
          </div>

          <div>
            <MenuIcon style={{fill: '#18d0d7', marginTop: '3px'}} />
          </div>
        </div>

        </div>
        </>
     );
}
 
export default Header;
