import React, { useState } from 'react';
import KoiralistaMUI from './KoiralistaMUI';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button, CardActions } from '@mui/material';
import { Grid } from '@mui/material';
import { Card } from '@mui/material';
import { CardHeader } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import KoiraJee from "./KoiraJee.jpg"; 
import { IconButton } from '@mui/material';



function Koiralomake () {



const [KoiratTaulukko, setKoirat] = useState([{
            nimi: "", 
            rotu: "", 
            sukupuoli: "", 
            omistaja: "", 
            ika: "", 
            kuvaus: ""
}]
); 


const [koira, setValues] = useState( {
    nimi: "", 
    rotu: "", 
    sukupuoli: "",
    omistaja: "",
    ika: "", 
    kuvaus: ""
});

const [viesti, setViesti] = useState(""); 


const muuta = (e) => {
    setValues( {
    ...koira, [e.target.name]: e.target.value
    } );
};


const lisaaKoira = (e) => {

    e.preventDefault();

    setValues( { nimi: koira.nimi, rotu: koira.rotu, sukupuoli: koira.sukupuoli, 
        omistaja: koira.omistaja, ika: koira.ika, kuvaus: koira.kuvaus } );
    
    if (koira.nimi === "" || koira.rotu === "" || koira.sukupuoli === "" 
    || koira.omistaja === "" || koira.ika === "" || koira.kuvaus === "") {
        setViesti("Jokin kenttä jäi tyhjäksi!");
    } else if (koira.nimi !== "" && koira.rotu !== "" && koira.sukupuoli !== "" 
    && koira.omistaja !== "" && koira.ika !== "" && koira.kuvaus !== "") {

        setViesti(""); 

       const koiraObj = {
            nimi: koira.nimi, 
            rotu: koira.rotu, 
            sukupuoli: koira.sukupuoli, 
            omistaja: koira.omistaja, 
            ika: koira.ika, 
            kuvaus: koira.kuvaus
       }; 

       KoiratTaulukko.push(koiraObj); 

       //Tämä on tässä koska ilman se luo tyhjän 0 index taulukkoon, tässä poistan sen. 
       if (KoiratTaulukko[0].nimi === "") {
           KoiratTaulukko.splice(0,1); 
       }

       // Testaamista varten
       console.log(KoiratTaulukko); 

       
    }
    
}

const Spuoli = [
    { arvo: "Tyttö", teksti: 'Tyttö' },
    { arvo: "Poika", teksti: 'Poika'},
    { arvo: "Tuntematon", teksti: 'En kerro :)'},
];



return (
    <div>

    <h1 id="koirat">Koirat: </h1>
    <h1 id="lisaakoira">Lisää Koira</h1> 

    <form id="lomake">
    <TextField label='Nimi' name='nimi' variant="outlined" fullWidth value={ koira.nimi } 
    onChange={ (e) => muuta(e) } />
    <br/>
    <br/>

    <TextField label='Rotu' name='rotu' variant="outlined" fullWidth value={ koira.rotu } 
    onChange={ (e) => muuta(e) } />
    <br/>
    <br/>

    <TextField label='Sukupuoli' name='sukupuoli' variant="outlined" fullWidth value={ koira.sukupuoli } 
    onChange={ (e) => muuta(e) } select>
    {
    Spuoli.map((spuoli) => (
    <MenuItem key={ spuoli.arvo } value={ spuoli.arvo }>
    { spuoli.teksti }
    </MenuItem>
    ))
    }
    </TextField>
    <br/>
    <br/>

    <TextField label='Omistaja' name='omistaja' variant="outlined" fullWidth value={ koira.omistaja } 
    onChange={ (e) => muuta(e) }  />
    <br/>
    <br/>

    <TextField label='Ikä' name='ika'  variant="outlined" fullWidth value={ koira.ika } 
    onChange={ (e) => muuta(e) }  />
    <br/>
    <br/>

    <TextField id="kuvaus" label='Lyhyt Kuvaus' name='kuvaus' variant="outlined"  value={ koira.kuvaus } 
    onChange={ (e) => muuta(e) }  /><br />

    <Button variant='contained' onClick={ (e) => lisaaKoira(e) }>Lisää</Button>

    <p>{viesti}</p>

    
    </form> 
  
    <Grid id="listaus" container spacing={4} sx={{ marginTop:1}}>
      { KoiratTaulukko.map(koira => {
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
              </CardContent>
 
              <CardActions>
                  <IconButton color='primary'><EditIcon /></IconButton>
                  <IconButton color="secondary"><DeleteIcon /></IconButton>
              </CardActions>
            </Card>
          </Grid>
        )
      })
    }
    </Grid>

    </div>
    
 );

 
}

export default Koiralomake; 
