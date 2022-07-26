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
                name: el.data.name.toUpperCase(),
                img: el.data.sprites.front_default
            })
        })
        console.log(pkmnInfo)
    }

    return (
        <tr>
            <td>{pkmnInfo.id}</td>
            <td>
                <div className="bg-warning d-flex rounded-circle" style={{'width':'75px', 'height':'75px'}}>
                    <img src={pkmnInfo.img} alt="" />
                </div>
            </td>
            <td>{pkmnInfo.name}</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    )

    
    
}

export default Pkmn