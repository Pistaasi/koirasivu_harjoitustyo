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

function KoiralistaMUI (props) {

  return (
    <Grid id="koiraboksi" container spacing={4} sx={{ marginTop:1}}>
      { props.koira.map(koira => {
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
    </Grid>
  )
}

export default KoiralistaMUI;
