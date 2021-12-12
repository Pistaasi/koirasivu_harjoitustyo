import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import pink from '@mui/material/colors/pink';
import NavigaatioTab from "./NavigaatioTab"; 
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListaaKoirat from "./ListaaKoirat"; 
import Tili from "./Tili"; 
import HaeKoirat from './HaeKoirat';


const theme = createTheme({
    palette: {
      primary: {main: "#FBACCC", contrastText: "#FFFFFF"},
      secondary: {main: "#C0F4F0", contrastText: '#FFFFFF'},
      text: {primary: "#48D2C7 ", secondary: "#48D2C7", contrastText: '#FFFFFF'},
      action: {active: pink[500], hover:pink[50], selected: pink[300], contrastText: '#FFFFFF' },
      background: {default: '#FFFFFF'},
      card: {default: "F4F9F9"}
     },
    typography: {fontFamily: ['Arial']},
 });




function KoiraApp() {

    return (
  <BrowserRouter>
 <ThemeProvider theme={ theme }>
  <CssBaseline />

  <Switch>
  <Route exact path='/'> <NavigaatioTab /> </Route>
  <Route path='/Tili'> < Tili/> </Route>
  <Route path='/Koirat'> <ListaaKoirat /> </Route>
  <Route path='/*'> <NavigaatioTab/> </Route>
  <Route path='/listaa'> <HaeKoirat/> </Route>
  </Switch>

  </ThemeProvider>
</BrowserRouter>
    );
}

export default KoiraApp; 