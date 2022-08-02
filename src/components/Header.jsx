import React from 'react'
// #20395E

const Header = ({logged}) => {
  return (
    <>
        <div className='text-center sticky-top' style={{backgroundColor: '#343A40', color: 'white'}} >
          <h3>
            {/* <span>Gengar Browser</span> */}
            <img style={{'height':'50px'}} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"/>
          </h3>
        </div>
    </>
  )
}

export default Header