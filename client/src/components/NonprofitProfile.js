import React,{ Component } from 'react';
/* import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'; Commented out until used to remove error messages */
import axios from 'axios';
import CalendarContainer from "../container/CalendarContainer.js";


export class NonprofitProfile extends Component{
  state = {
    description: ''
  }

  componentDidMount(){

    axios.get('http://localhost:5000/api/users')
  .then(response => {
        console.log(response.data);
        this.setState({
          description : response.data
        });
  })
  .catch(error => {
    console.log('Error fetching and parsing data', error);
  });
  }

  render(){   
   const image = require(`../img/${this.props.data.image}`) ;
    return (
      <div style={ {border: 'solid 1px black'}}>
        <img src={image} alt=""/>
        <h3>{this.props.data.name}</h3>
        <span style={ { display: 'block'} }>AT {this.props.data.location.address} </span>
        <p>{this.state.description}</p>
         <CalendarContainer/> 
      </div>
    )
  }
  }

export default NonprofitProfile;

