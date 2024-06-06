import React from 'react'
import "../Style/Skillcard.css"

export default function Skillcard(props) {
  return (
    <div className='Skillcontainer'>
      <div className='skillmain'>
        <img style={{height:350+"px",}} src={props.image} alt={props.name} />
      </div>
      <h4>{props.name}</h4>
    </div>
  )
}
