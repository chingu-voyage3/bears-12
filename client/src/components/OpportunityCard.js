import React from 'react'
import PropTypes from 'prop-types'
import image from '../img/download.jpeg'

const OpportunityCard = (props) => {
  return (
    <div style={ {border: 'solid 1px black'}}>
      <img src={image} alt=""/>
      <h3>{props.data.title}</h3>
      <span style={ { display: 'block'} }>AT <a href="#">{props.data.nonProfit.toUpperCase()}</a> , {props.data.location.toUpperCase()} </span>
      <p>{props.data.description.slice(0, 120).concat('...')}</p>
      <span style={ {display: 'block', borderTop: '1px solid black' } }>{props.data.startDate}</span>
    </div>
  )
}

export default OpportunityCard
