import '../App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import VillaIcon from '@mui/icons-material/Villa';

function Show() {
  const [Pname, setPname] = useState('');
  const [Pcity, setPcity] = useState('');
  const [Pstate, setPstate] = useState('');
  const [Pnumber, setPnumber] = useState(0);
  const [Reglist, setRegList] = useState([]);
  const [searchCity, setSearchCity] = useState(''); // Added state for search query

  const addToList = () => {
    axios
      .post('http://localhost:3001/newpic', {
        Pname: Pname,
        Pcity: Pcity,
        Pstate: Pstate,
        Pnumber: Pnumber,
      })
      .then((response) => {
        // Handle the response if needed
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const searchProperties = () => {
    axios
      .get(`http://localhost:3001/search?Pcity=${searchCity}`)
      .then((response) => {
        setRegList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get('http://localhost:3001/pic')
      .then((response) => {
        setRegList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const paperStyle = { padding: 50, height: '80vh', width: 280, margin: '10px auto' };
  return (
    <div className="App">
      <Paper elevation={10} style={paperStyle} backgroundColor="#00adb5">
        <h1>UPLOAD YOUR PROPERTY</h1>
        <Grid align="center">
          <VillaIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <br />
          <TextField
            onChange={(event) => setPname(event.target.value)}
            label="PROPERTY NAME"
            placeholder="PROPERTY NAME"
            fullWidth
            required
          />
          <br />
          <br />
          <TextField
            onChange={(event) => setPcity(event.target.value)}
            label="PROPERTY CITY"
            placeholder="PROPERTY CITY"
            fullWidth
            required
          />
          <br />
          <br />
          <TextField
            onChange={(event) => setPstate(event.target.value)}
            label="PROPERTY STATE"
            placeholder="PROPERTY STATE"
            fullWidth
            required
          />
          <br />
          <br />
          <TextField
            onChange={(event) => setPnumber(event.target.value)}
            label="Contact Number"
            placeholder="Contact number"
            fullWidth
            required
          />
          <br />
          <br />
          <Button onClick={addToList} type="submit" color="primary" variant="contained" fullWidth>
            UPLOAD
          </Button>
          <br />
          <br />
          <TextField
          onChange={(event) => setSearchCity(event.target.value)}
          label="Search by City"
          placeholder="Enter City"
          fullWidth/>
          <Button onClick={searchProperties} type="submit" color="primary" variant="contained" fullWidth>
            Search
          </Button>
        </Grid>
      </Paper>
      <br/>
      <br/>
      <br/>
      <br/>
      {Reglist.map((val, key) => {
        return (
          <div>
            <font color="#C13A1D" size="2">
              <h1>Property: {val.Pname}</h1>
              <h1>City: {val.Pcity}</h1>
              <h1>State: {val.Pstate}</h1>
              <h1>Contact me: {val.Pnumber}</h1>
              <br />
            </font>
          </div>
        );
      })}
    </div>
  );
}

export default Show;
