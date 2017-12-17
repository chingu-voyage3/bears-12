import React from 'react';
import { Link } from 'react-router-dom';
import OpportunitesContainer from './OpportunitiesContainer';

const HomeContainer = () => (
  <div>
    <div>
      <h1>Lorem Ipsum</h1>
      <Link to='/search'>Search Volunteer Opportunites</Link>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus numquam, repellendus. Obcaecati, mollitia ab consequuntur nam ullam nostrum. Magnam consequatur in non odit, nam earum ex. Illo, sequi, laboriosam. Odio.</p>
    </div>
    <OpportunitesContainer />
  </div>
)

export default HomeContainer
