import React, { Component } from 'react';
import OpportunitiesContainer from '../container/OpportunitiesContainer';
import ComposeOpportunitiesContainer from "../container/ComposeOpportunitiesContainer";


/**
 * MessageContainer
 */
export class MyOpportunitiesContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor () {
      super ()
      this.state = {
          myOpportunitiesIsVisible: true,
          expiredOpportunitiesIsVisible: false,
          composeOpportunitiesIsVisible: false
      }
  }
  setMyOppsVis () {
      this.setState({
          myOpportunitiesIsVisible: true,
          expiredOpportunitiesIsVisible: false,
          composeOpportunitiesIsVisible: false
      })
  }
  setExpOppsVis () {
      this.setState({
          myOpportunitiesIsVisible: false,
          expiredOpportunitiesIsVisible: true,
          composeOpportunitiesIsVisible: false
      })
  }
  setCompOppsVis () {
      this.setState({
          myOpportunitiesIsVisible: false,
          expiredOpportunitiesIsVisible: false,
          composeOpportunitiesIsVisible: true
      })
  }
    
  render() {
    const buttonStyle = {
        width: '100px',
        height: '50px',
        borderStyle: 'solid',
        borderWidth: '5px',
        borderColor: '#333',
        borderRadius: '5px',
        cursor: 'pointer',
        backgroundColor: '#333',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    
    const buttonContainerStyle = {
        margin: 'auto',
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
      
    return (
      <div>
        <div style={buttonContainerStyle}>
          <div style={buttonStyle} onClick={() => this.setMyOppsVis()}>My Current Opportunities</div>
          <div style={buttonStyle} onClick={() => this.setExpOppsVis()}>Expired Opportunities</div>
          <div style={buttonStyle} onClick={() => this.setCompOppsVis()}>New Opportunity</div>
        </div>
        <div>
          {this.state.myOpportunitiesIsVisible && <OpportunitiesContainer/>}
          {this.state.expiredOpportunitiesIsVisible && <OpportunitiesContainer/>}
          {this.state.composeOpportunitiesIsVisible && <ComposeOpportunitiesContainer/>}
        </div>
      </div>
    );
  }
}

export default MyOpportunitiesContainer;
