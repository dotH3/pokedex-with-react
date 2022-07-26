import React from 'react'
// #20395E

const Header = ({logged}) => {
  return (
    <>
        <div className='text-center p-1' style={{backgroundColor: '#343A40', color: 'white'}} >
            {/* 
            list-unstyled
            */}
          <h3>Pokedex</h3>
        </div>
    </>
  )
}

export default Header