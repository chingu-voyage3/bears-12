import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import image from '../img/download.jpeg'

const OpportunityCard = (props) => {
  return (
    <div style={ {border: 'solid 1px black'}}>
      <Link to={"/opportunity/"+props.data.id}><img src={image} alt=""/></Link>
      <h3>{props.data.title}</h3>
      <span style={ { display: 'block'} }>AT <Link to={"/profile/"+props.data.userid}>{props.data.nonProfit.toUpperCase()}</Link> , {props.data.location.toUpperCase()} </span>
      <p>{props.data.description.slice(0, 120).concat('...')}</p>
      <span style={ {display: 'block', borderTop: '1px solid black' } }>{props.data.startDate}</span>
    </div>
  )
}

export default OpportunityCard
