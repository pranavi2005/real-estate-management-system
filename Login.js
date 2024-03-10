import React, { useState } from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import axios from 'axios';
const Login = () => {
  const [Username, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const btnstyle = { margin: '8px 0' };

  const handleLogin = () =>{
    axios.get("http://localhost:3001/users/display")
      .then((response) => {
        const regList = response.data;
        const foundUser = regList.find(val => val.Username === Username && val.Password === Password);
  
        if (foundUser) {
          console.log("Login Successful");
          window.location.href='/home';
        } else {
          // Set the error message
          setErrorMessage("Login failed. Please check your username and password.");
          setTimeout(() => {
            setErrorMessage("");
          }, 2000);
        }
      })
      .catch((error) => {
        console.error("Error while logging in:", error);
        // Set the error message for network errors
        setErrorMessage("Error while logging in. Please try again later.");
        setTimeout(() => {
          setErrorMessage("");
        }, 2000);
      });
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <Grid>
      <div className="App">
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
            <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
            <h2>Login</h2>
          </Grid>
          <TextField onChange={(event) => setUserName(event.target.value)} label='Username' placeholder='Enter username' fullWidth required />
          <TextField onChange={(event) => setPassword(event.target.value)} label='Password' placeholder='Enter password' type='password' fullWidth required />

          <Button onClick={handleLogin} color='secondary' variant="contained" style={btnstyle} fullWidth>
            Sign in
          </Button>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <Typography>
            <Link onClick={refreshPage}> {/* Add onClick event */}
              Forgot password?
            </Link>
          </Typography>

          <Typography>
            Do you have an account?
            <Link href="/sign-up">
              Sign Up
            </Link>
          </Typography>
        </Paper>
      </div>
    </Grid>
  );
}
export default Login;
