import React from 'react'
import { Link } from 'react-router-dom'; 
import CalendarContainer from "../container/CalendarContainer";
import image from '../img/download.jpeg'

const Profile = (props) => {
  return (
    <div style={ {border: 'solid 1px black'}}>
      <img src={image} alt=""/>
      <h3>{props.data.name}</h3>
      <span style={ { display: 'block'} }>AT {props.data.location.address} </span>
      <p>{props.data.description}</p>
      {
        props.data.userType === 'Non-Profit' ? <CalendarContainer /> : null
      }
    </div>
  )
}

export default Profile