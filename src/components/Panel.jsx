import React, { useEffect } from 'react'
import Pkmn from './Pkmn'

const Panel = () => {
  return (
    <>
        <div className="m-3 border">
            <table className="table align-middle">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Imagen</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Tipos</th>
                        {/* <th scope="col">Peso</th> */}
                    </tr>
                </thead>
                <tbody id="pokeList">
                    
                    <Pkmn PkmnID='3'/>
                    <Pkmn PkmnID='6'/>
                    <Pkmn PkmnID='9'/>
                    
                </tbody>
            </table>
        </div>
    </>
  )
}

export default Panel