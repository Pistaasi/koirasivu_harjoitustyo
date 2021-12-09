import React, {useState} from "react"; 
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import LisaaKoiraLomake from "./LisaaKoiraLomake"; 
import PetsIcon from '@mui/icons-material/Pets';
import AppBarMUI from "./AppBarMUI";
import KaikkiKoiratDB from "./KaikkiKoiratDB"; 
import Painolaskin from "./Painolaskin"; 
import KoiralistaMUI from "./KoiralistaMUI";
  

function Menu () {
    const [value, setValue] = useState(0);
    const handleChange = (event, val) => {
    setValue(val);
}

return (
    <div>
    <AppBarMUI appbar ={ AppBarMUI } />
    <Box>
        <Tabs value={ value } variant="fullWidth" onChange={ handleChange }>
        <Tab label='Lisää koira' icon={<PetsIcon />} />
        <Tab label='Katso koiria' icon={<PetsIcon />} />
        <Tab label='Painolaskin' icon={<PetsIcon />} />

        </Tabs>

        { value === 0 && <LisaaKoiraLomake /> }
        { value === 1 && <KoiralistaMUI /> }
        { value === 2 && <Painolaskin /> }
     </Box>
     </div>
)
}
export default Menu;
