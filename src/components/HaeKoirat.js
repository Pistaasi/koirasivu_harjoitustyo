import KoiralistaMUI from "./KoiralistaMUI";
import React, { useState, useEffect } from 'react';
import Taulukot from "./Taulukot"; 

function HaeKoirat () {

    // Props ei toimi?? Mutten viitsi poistaa tätä silti
    const [koiratdb, setKoiratdb] = useState([]);
    const haeKaikkiKoirat = async () => {
    try {
    const response = await fetch('http://localhost:8080/koira/all');
    const json = await response.json();
    setKoiratdb(json);
    } catch (error) {
    setKoiratdb([]);
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