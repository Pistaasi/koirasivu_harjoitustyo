import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import KoiraJee from "./KoiraJee.jpg"; 

function KaikkiKoirat () {
    const koira = [
        {
          id: 1,
          nimi: 'Topi',
          rotu: 'Mittelspitz',
          sukupuoli: 'poika',
          omistaja: 'Rokan perhe',
          ika: '10',
          kuvaus: "Oma Söpö hauveli"
        },
        {
          id: 2,
          nimi: 'Max',
          rotu: 'Bichon Frise',
          sukupuoli: 'poika',
          omistaja: 'Naapuri',
          ika: "~8",
          kuvaus: "Naapurin söpö pieni valkoinen koira"
        },
        {
            id: 3,
            nimi: 'Salli',
            rotu: 'Terrieri',
            sukupuoli: 'tyttö',
            omistaja: 'Naapuri 2',
            ika: "~12",
            kuvaus: "Naapurin terrieri, tykkää Topista"
        }
      ];


  return (
    <Grid id="koiraboksi" container spacing={4} sx={{ marginTop:1}}>
      { koira.map(koira => {
          return (
            <Grid item key={ koira.nimi }>
              <Card>
              <CardHeader
                title={ koira.nimi }
                subheader={ koira.omistaja } />

              <CardContent>
              
                  <CardMedia sx={ {height: 200, width: 200} }
                    image={ KoiraJee }
                    />
                <Typography>{ koira.rotu }</Typography>
                <Typography>{ koira.sukupuoli }</Typography>
                <Typography>{ koira.kuvaus }</Typography>
              </CardContent>
 
              <CardActions>
                  <IconButton color='primary'><EditIcon /></IconButton>
                  <IconButton><DeleteIcon /></IconButton>
              </CardActions>
            </Card>
          </Grid>
          

        )
      })
    }
    {
            }
    </Grid>
  )
}

export default KaikkiKoirat;