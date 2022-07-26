import React, { useState } from 'react'
import axios from 'axios'

const Pkmn = ({PkmnID='ditto'}) => {
    // if(!PkmnID) return;
    const url = 'https://pokeapi.co/api/v2/pokemon/';

    const [pkmnInfo, setPkmnInfo] = useState(false);

    if(!pkmnInfo){
        axios.get(url+PkmnID).then((el)=>{
            setPkmnInfo({
                id: el.data.id,
                name: el.data.name.toUpperCase()
            })
        })
        console.log(pkmnInfo)
    }

    return (
        <tr>
            <td>{pkmnInfo.id}</td>
            <td></td>
            <td>{pkmnInfo.name}</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    )

    
    
}

export default Pkmn