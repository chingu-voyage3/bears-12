import React from 'react'



const VolunteerProfile = (props) => {
	const image = require(`../img/${props.data.image}`)
  return (

    <div style={ {border: 'solid 1px black'}}>
    	{console.log(props.data.image)}
      <h3>{props.data.name}</h3>
      <img src={image} alt=""/>      
      <p>{props.data.bio}</p>
 
    </div>
  )
}

export default VolunteerProfile;