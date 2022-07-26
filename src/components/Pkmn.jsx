import React from 'react'
import axios from 'axios'

const Pkmn = ({PkmnID='ditto'}) => {
    // if(!PkmnID) return;
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    let pkmnInfo = {
        id: '',
        name: ''
    }
    axios.get(url+PkmnID).then((el)=>{
        pkmnInfo.id=el.data.id
        pkmnInfo.name=el.data.name
        console.log(pkmnInfo)
    })

    return (
        <tr>
            <td>{pkmnInfo.id}</td>
            <td>foto</td>
            <td>{pkmnInfo.name}</td>
            <td>tipo</td>
            <td>tipo 2</td>
            <td>peso</td>
        </tr>
    )
    
}

export default Pkmn