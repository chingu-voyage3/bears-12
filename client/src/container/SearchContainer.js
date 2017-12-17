import React, { Component } from 'react';
import OpportunitiesContainer from './OpportunitiesContainer'
import Matches from '../components/Matches';
/**
 * SearchContainer
 */
export class SearchContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <h1>{'Find Volunteer Opportunites'.toUpperCase()}</h1>
        <form action="">
          <input type="text"/>
          <button type="submit">Search</button>
        </form>
        <Matches /    >
      <OpportunitiesContainer />

      </div>
    );
  }
}

// SearchContainer.propTypes = {
//   prop: PropTypes.type.isRequired
// }

export default SearchContainer;
