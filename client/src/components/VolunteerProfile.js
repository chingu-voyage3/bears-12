import React from 'react'
import image from '../img/download.jpeg'


const VolunteerProfile = (props) => {
  return (
    <div style={ {border: 'solid 1px black'}}>
      <h3>{props.data.name}</h3>
      <img src={image} alt=""/>      
      <p>{props.data.bio}</p>
 
    </div>
  )
}

export default VolunteerProfile;