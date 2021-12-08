import React from "react";

function Koira(props) {
    return (
    <div>
    { props.koira.map( koira => {
    return (
    <p key={ koira.nimi }>
    <b id="title">Nimi:</b> { koira.nimi }<br/>
    <b id="title">Rotu:</b> {koira.rotu} <br />
    <b id="title">Sukupuoli:</b> {koira.sukupuoli} <br />
    <b id="title">Omistaja:</b> {koira.omistaja} <br />
    <b id="title">Ikä:</b> {koira.ika} <br />
    <b id="title">Kuvaus:</b> {koira.kuvaus}
    </p> );
    })
    }
    </div> );
    }
export default Koira; 
    