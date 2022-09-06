import React, { useEffect } from 'react'
import Pkmn from './Pkmn'

const Panel = () => {
    const lista = [1,2,3,4,5,6,7,8,9,10]
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
                    
                    {/* <Pkmn PkmnID='3'/> */}
                    {lista.map((e)=>{
                        return(
                            <Pkmn PkmnID={e}/> 
                        )
                    })}


                </tbody>
            </table>
        </div>
    </>
  )
}

export default Panel