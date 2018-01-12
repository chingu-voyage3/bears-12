import React from 'react'
/* import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'; Commented out until used to remove error messages */
import image from '../img/download.jpeg'
import CalendarContainer from "../container/CalendarContainer.js";


const NonprofitProfile = (props) => {
  return (
    <div style={ {border: 'solid 1px black'}}>
      <img src={image} alt=""/>
      <h3>{props.data.name}</h3>
      <span style={ { display: 'block'} }>AT {props.data.location.address} </span>
      <p>{props.data.description}</p>
       <CalendarContainer/> 
    </div>
  )
}

export default NonprofitProfile;

