import KoiralistaMUI from "./KoiralistaMUI";

function HaeKoirat () {
    const [koirat, setKoira] = useState([]);
    const [virhe, setVirhe] = useState('Haetaan');
    const haeKaikkiKoirat = async () => {
    try {
    const response = await fetch('http://localhost:8080/koira/all');
    const json = await response.json();
    setKoira(json);
    setVirhe('');
    } catch (error) {
    setHenkilo([]);
    setVirhe('Koiria ei löytynyt :(');
    }
    }
    useEffect(() => {
    haeKaikkiKoirat();
    }, []);

    if (virhe.length > 0) {
        return ( <Typography>{ virhe }</Typography> );
        }
        if (koirat.length > 0) {
        return ( <KoiralistaMUI koirat={ koirat } /> );
        }
        return ( <Typography>Koiria ei vielä ole!</Typography> );
}