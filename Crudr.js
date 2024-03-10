import '../App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link, Avatar, Button, TextField } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@material-ui/core';
import { useNavigate } from 'react-router';
import { Menu } from '@mui/icons-material';



function Crudr() {
  const [Firstname, setFirstName] = useState('');
  const [Lastname, setLastName] = useState('');
  const [Username, setUserName] = useState('');
  const [Role, setRole] = useState('Buyers');
  const [Password, setPassword] = useState('');
  const [Reglist, setRegList] = useState([]);
  const navigate = useNavigate();



  // To add a new user
  const addToList = () => {
    axios
      .post('http://localhost:3001/users/newreg', {
        Firstname: Firstname,
        Lastname: Lastname,
        Username: Username,
        Password: Password,
        Role: Role,
      })
      .then((response) => {
        console.log(response.data);
        // Add any additional handling you need
        navigate('/log-in');
      })
      .catch((error) => {
        console.error(error);
        // Handle errors
      });
  };

  // To retrieve all users
  useEffect(() => {
    axios
      .get('http://localhost:3001/users/display')
      .then((response) => {
        setRegList(response.data);
      })
      .catch((error) => {
        console.error(error);
        // Handle errors
      });
  }, []);

  const paperStyle = { padding: 20, height: '130vh', width: 280, margin: '20px auto' };
  
  return (
    <div className="App">
      <Paper elevation={10} style={paperStyle} backgroundColor="#00adb5">
        <Grid align="center">
          <h1>Create an account</h1>
          <Avatar style={{ height: '50px', width: '50px' }} />
          <br />
          <TextField
            onChange={(event) => setFirstName(event.target.value)}
            label="Firstname"
            placeholder="Enter Firstname"
            fullWidth
            required
          />
          <br />
          <br />
          <TextField
            onChange={(event) => setLastName(event.target.value)}
            label="Lastname"
            placeholder="Enter Lastname"
            fullWidth
            required
          />
          <br />
          <br />
          <Typography variant="h6">Select Role</Typography>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={Role}
            onChange={(event) => setRole(event.target.value)}
            label="Role"
          >
            <MenuItem value="Buyers">Buyers</MenuItem>
            <MenuItem value="Agent">Agent</MenuItem>
            <MenuItem value="Admin">Admin</MenuItem>
          </Select>
          <br />
          <br />
          <TextField
            onChange={(event) => setUserName(event.target.value)}
            label="Username"
            placeholder="Enter username"
            fullWidth
            required
          />
          <br />
          <br />
          <TextField
            onChange={(event) => setPassword(event.target.value)}
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
          />
          <br />
          <br />
          <Button type="submit" color="primary" variant="contained" fullWidth onClick={addToList}>
            Sign up
          </Button>
          <br />
          <br />
          <Typography>
            Already have an account?
            <Link href="/log-in">Log in</Link>
          </Typography>
        </Grid>
      </Paper>
    </div>
  );
}

export default Crudr;
