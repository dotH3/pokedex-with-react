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
                        <th scope="col">Peso</th>
                    </tr>
                </thead>
                <tbody id="pokeList">
                    {/* <tr>
                    <td></td>
                    <td>06/07/2022</td>
                    <td>1kg</td>
                    <td>$300</td>
                    <td><button class="btn btn-danger" onclick="deleteCake();"><i class="bi bi-trash"></i></button></td>
                    </tr> */}
                    
                    
                    <Pkmn PkmnID='3'/>
                    <Pkmn PkmnID='6'/>
                    <Pkmn PkmnID='9'/>
                    <Pkmn PkmnID='25'/>
                    <Pkmn PkmnID='gengar'/>
                    <Pkmn PkmnID='metapod'/>
                    <Pkmn PkmnID='clefairy '/>
                    <Pkmn PkmnID='ditto'/>
                    
                    
                </tbody>
            </table>
        </div>
    </>
  )
}

export default Panel