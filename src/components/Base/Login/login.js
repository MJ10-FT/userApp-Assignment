import React, { useState } from 'react';
import { withRouter } from "react-router";
import './login.css';
import {signInWithEmailPassword, signUpWithEmailPassword} from '../../../services/authentication';
import uploadBlob from '../../../services/Upload';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';


const Login = (props) => {

    const [loginForm, setloginForm] = useState({
        email: '',
        password: ''
    });

    const [errorMessage, seterrorMessage] = useState('');

    const [values, setValues] = useState({
        email: '',
        password: '',
       
        showPassword: false,
      });


      const [errors, setErrors] = useState({
        email: false,
        password: false,
      });
    
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

   
    const handleClick = ()=>{
        if(values.email === '' || !/\S+@\S+\.\S+/.test(values.email)){
            setErrors({ ...errors, email:true})
        }
        else if (values.password === ''){

            setErrors({ ...errors, password:true})

        }
        else{
            setErrors({email:false, password:false})
        console.log(values)
        signInWithEmailPassword(values.email, values.password).then(
            (userCredential)=>{
                // var user = userCredential.user;
                props.history.push('profile')

            }
        ) .catch((error) => {
            seterrorMessage('User not found, please click Sign Up to add user')          
            console.log('works');
          });
      


        }
        // uploadBlob('src\assets\wc_2010_10.jpg')
    }

    const signUpClick = ()=>{
        if(values.email === '' || !/\S+@\S+\.\S+/.test(values.email)){
            setErrors({ ...errors, email:true})
        }
        else if (values.password === ''){

            setErrors({ ...errors, password:true})

        }

        signUpWithEmailPassword(values.email, values.password).then(
            (userCredential)=>{
                props.history.push('profile')
            }
        ) 
    }





    return (
        <>
        <div className="background">
            <Card className="signInCard">
                <div className="formWrapper">
                    <div style={{fontSize: '27px', color: '#5b4f4f', textAlign: 'center', fontWeight: 700}}>
                        Login
                    </div>
                    <form className="form" noValidate autoComplete="off">
                        <TextField
                         value={values.email}
                         onChange={handleChange('email')}
                          style={{width: '41vh'}}
                          error = {errors.email}

                         id="outlined-basic" label="Login" variant="outlined" />
                        <TextField value={values.password}
                        error = {errors.password}
                         onChange={handleChange('password')} type={values.showPassword ? 'text' : 'password'} style={{width: '41vh', marginTop: '21px'}} 
                         id="outlined-basic" label="Password" variant="outlined"
                         InputProps={{
                         
                            endAdornment :(
                                <InputAdornment position="end">
                                  <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                  >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                  </IconButton>
                                </InputAdornment>
                            )
                          }}
                        
                          />

                        <div style= {{color: 'red', textAlign: 'center', fontSize: '13px'}}>
                            {errorMessage}
                        </div>
                        <div style= {{color: '#5b4f4f', paddingTop: '13px', paddingBottom: '8px', fontSize: '13px', textAlign: 'start', marginLeft: '20px'}}>
                            Forgotten your password
                        </div>
                        <Button style= {{color: '#18d0d7', backgroundColor: '#252a41', 
                        width: '87%', fontSize: '14px', fontWeight: 500, height: '45px'}}
                        onClick = {handleClick}>
                            <span style= {{position: 'relative', top: '4px', right: '9px'}}>
                                <FlashOnIcon style= {{fill: '#18d0d7', fontSize: '16px'}} />
                            </span>
                            Login 
                        </Button>
                    </form>

                    <div style={{fontSize: '13px', color: '#5b4f4f', marginTop: '13px', textAlign: 'center', fontWeight:'500'}}>
                        <div>
                            By continuing you agree to BLOCO's
                        </div>
                        <div>
                            <u>Terms Of Use</u> and <u>Privacy Policy</u>
                        </div>
                    </div>
                    
                    <div style={{margin: '18px 0 12px 0', padding: '0px 17px;'}}>
                        <hr style= {{border: '1px dashed #a9a3a3'}}></hr>
                    </div>

                    <div style={{fontSize: '14px', color: '#5b4f4f', textAlign: 'center', fontWeight:'500'}}>
                        NEW to BLOCO?<a onClick = {signUpClick} style={{color: '#18d0d7', cursor: 'pointer'}}> Sign Up</a>
                    </div>

                </div>



            
            </Card>          
        </div>
    
        </>
      );
}
 
export default withRouter(Login);