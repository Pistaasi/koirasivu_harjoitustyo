import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function KoiralistaMUI (props) {

  const [koiratdb, setKoiratdb] = useState([]);
    const [virhe, setVirhe] = useState('Haetaan');
    const haeKaikkiKoirat = async () => {
    try {
    const response = await fetch('http://localhost:8080/koira/all');
    const json = await response.json();
    setKoiratdb(json);
    setVirhe('');
    } catch (error) {
    setKoiratdb([]);
    setVirhe('Koiria ei löytynyt :(');
    }
    }
    useEffect(() => {
    haeKaikkiKoirat();
    }, []);

    const DeleteRequest = (e, id) => {
      e.preventDefault(); 
      var delLink = 'http://localhost:8080/koira/delete/' + id; 
      const res = axios.delete(delLink);
      window.open(delLink, '_blank');
      console.log(res); 
    }

  return (
    <div>
    <h1>{virhe}</h1>
    <Grid id="koiraboksi" container spacing={4} sx={{ marginTop:1}}>
      { koiratdb.map(koira => {
          return (
            <Grid item key={ koira.nimi }>
              <Card>
              <CardHeader
                title={ koira.nimi }
                subheader={ koira.omistaja } />

              <CardContent>
              

                <Typography>{ koira.rotu }</Typography>
                <Typography>{ koira.sukupuoli }</Typography>
                <Typography>{ koira.kuvaus }</Typography>
                <Typography>{ koira.ika }</Typography>
              </CardContent>
 
              <CardActions>
                  <IconButton color="secondary" onClick={ (e) => DeleteRequest(e, koira.id)}><DeleteIcon /></IconButton>
              </CardActions>
            </Card>
          </Grid>
        )
      })
    }
    </Grid>
    </div>
  )
}

export default KoiralistaMUI;
