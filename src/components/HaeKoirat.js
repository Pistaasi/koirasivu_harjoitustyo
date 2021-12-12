import KoiralistaMUI from "./KoiralistaMUI";
import React, { useState, useEffect } from 'react';
import { Typography } from "@mui/material";
import Taulukot from "./Taulukot"; 

function HaeKoirat () {
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

    return ( 
    <KoiralistaMUI koiratdb={ koiratdb } />,
    <Taulukot koiratdb={ koiratdb } />
        );
}

export default HaeKoirat;