import React, { Component } from 'react';
import OpCard from '../components/OpportunityCard';
//import moment from 'moment'; Commented to remove extraneous error messages

/**
 * OpportunitesContainer
 */
export class OpportunitesContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const mockData = [{
      userid: 'hotdogFings',
      image: '',
      title: 'Lorem Ipsum',
      description: 'This is a description. This describes what the event is, and who is hosting it and other good stuff that people need to know',
      startDate: '12/31/2017',
      location: 'Columbus, Ohio',
      nonProfit: 'Hotdog Fingers Society',
      id: 1
    }];

    return (
      <div>
        {
          mockData.map((data, idx) => {
            return <OpCard key={idx} data={data} />
          })
        }
      </div>
    );
  }
}

// OpportunitesContainer.propTypes = {
//   prop: PropTypes.type.isRequired
// }

export default OpportunitesContainer;
