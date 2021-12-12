import React,  { useState, useEffect } from "react";
import {
    // main component
    Chart,
    // graphs
    Bars, Cloud, Dots, Labels, Lines, Pies, RadialLines, Ticks, Title,
    // wrappers
    Layer, Animate, Transform, Handlers,
    // helpers
    helpers, DropShadow, Gradient
} from 'rumble-charts';
import { Doughnut } from 'react-chartjs-2';


function Koira(props) {

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

    const Rodut = koiratdb;
    console.log(Rodut); 

    var labradorCounter = 0; 
    var mittelCounter = 0; 
    var kissaCounter = 0; 
    var terrierCounter = 0; 

    var i = 0; 
    while (koiratdb.length > i) {
        if (koiratdb[i].rotu == "Labradori") {
            labradorCounter++; 
        }
        if (koiratdb[i].rotu == "Mittelspitz") {
            mittelCounter++; 
        }
        if (koiratdb[i].rotu == "Kissa") {
            kissaCounter++; 
        }
        if (koiratdb[i].rotu == "Terrieri") {
            terrierCounter++; 
        }

        console.log(kissaCounter + " " + mittelCounter + " " + labradorCounter + " " + terrierCounter); 
        i++; 
    } // while 1 

    var ika1 = 0; 
    var ika2 = 0; 
    var ika3 = 0; 
    var ika4 = 0; 
    var j = 0; 
    while (koiratdb.length > j) {
        if (koiratdb[j].ika < 6) {
            ika1++; 
        }
        if (koiratdb[j].ika > 5 && koiratdb[j].ika < 11) {
            ika2++; 
        }
        if (koiratdb[j].ika > 10 && koiratdb[j].ika < 16) {
            ika3++; 
        }
        if (koiratdb[j].ika > 15) {
            ika4++; 
        }
        j++; 
        console.log("0-5: " + ika1 + " 6-10: " + ika2 + " 11-15: " + ika3 + " 16+: " + ika4)
    } // while 2


const series = [
    {
      data: [ika1],
      name: '0-5'
    },
    {
      data: [ika2],
      name: '6-10'
    },
    {
      data: [ika3],
      name: '11-15'
    }, 
    {
        data: [ika4],
        name: '16+'
      }
  ];

const series2=[{
        data: [
            {
              label: 'Labradori',
              x: labradorCounter,
              y: labradorCounter
            },
            {
              label: 'Mittelspitz',
              x: mittelCounter,
              y: mittelCounter
            },
            {
              label: 'Kissa',
              x: kissaCounter,
              y: kissaCounter
            },
            {
              label: 'Terrieri',
              x: terrierCounter,
              y: terrierCounter
            },
            
          ]

}]; 
       


      return(
          <div>
      <Chart
  height={300}
  minY={0}
  series={series}
  style={{
    fontFamily: 'sans-serif',
    fontSize: '0.75em'
  }}
  width={600}
>
  <Layer
    height="90%"
    position="top center"
    width="80%"
  >
    <Ticks
      axis="y"
      labelAttributes={{
        x: -5
      }}
      labelStyle={{
        dominantBaseline: 'middle',
        fill: 'lightgray',
        textAnchor: 'end'
      }}
      lineLength="100%"
      lineStyle={{
        stroke: 'lightgray'
      }}
      lineVisible
    />
    <Ticks
      axis="x"
      label={function noRefCheck(){}}
      labelAttributes={{
        y: 3
      }}
      labelStyle={{
        dominantBaseline: 'text-before-edge',
        fill: 'lightgray',
        textAnchor: 'middle'
      }}
    />
    <Bars
      groupPadding="3%"
      innerPadding="0.5%"
    />
  </Layer>
</Chart>


<Chart
height={400}
minY={0}
width={400}
series={series2}
>
<Transform method="transpose">
  <Cloud

    font="sans-serif"
    maxFontSize={72}
    minFontSize={24}
    padding={2}
  />
</Transform>
</Chart>
</div>
      );
}

export default Koira; 