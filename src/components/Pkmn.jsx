import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Pkmn = ({PkmnID='1'}) => {
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    const [pkmnInfo, setPkmnInfo] = useState('');

    useEffect(()=>{
        if(!pkmnInfo){
                axios.get(url+PkmnID).then((el)=>{
                const firstType = el.data.types[0].type.name;
                var color = '#000'
                if(firstType=='water'){color='#84b6f4'}
                if(firstType=='grass'){color='#77dd77'}
                if(firstType=='fire'){color='#ff6961'}
                if(firstType=='ghost'){color='#a788ab'}
                if(firstType=='bug'){color='#d8f79a'}
                if(firstType=='fairy'){color='#f79ae5'}
                if(firstType=='electric'){color='#fdfd96'}
                //
        
                var types = [firstType];
                if(el.data.types.length==2){types.push(el.data.types[1].type.name)}
        
                setPkmnInfo({
                    id: el.data.id,
                    name: el.data.name.toUpperCase(),
                    img: el.data.sprites.front_default,
                    types,
                    typeColor: color
                })
            })
        }
    },[]);
    
    return (
        <tr>
            <td>{pkmnInfo.id}</td>
            <td>
                <div className="d-flex rounded-circle" style={{'width':'75px', 'height':'75px', 'backgroundColor': pkmnInfo.typeColor}}>
                    <img src={pkmnInfo.img}/>
                </div>
            </td>
            <td>{pkmnInfo.name}</td>
            {/* 
                POR QUE MIERDA NO PUEDO HACER PKMNINFO.TYPES[0] ?
                O COSAS SIMILARES
            */}
            <td>{pkmnInfo.types}</td>
        </tr>
    )
}

export default Pkmn