import React from 'react'
import Pagina from '../components/Pagina'


const Array = () => {

  const carros = ['Opala', 'Classic', 'Ka', 'Omega', 'Fuscão',]

  return (
    <>
      <Pagina titulo="Array">
        
      <ol>
        {carros.map(item=>(           
          <li>{item}</li>          
        ))}
        </ol>

      </Pagina>

    </>
  )
}

export default Array