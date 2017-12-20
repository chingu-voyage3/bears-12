import React from 'react'
import PropTypes from 'prop-types'
import Example from '../img/download.jpeg'
import { Link } from 'react-router-dom';

const Opportunity = (props) => {
    const mockData = {
      opportunityId: 1,
      title: 'Lorm Ipsum',
      nonProfit: 'Hotdog Fingers Society',
      userid: 'hotdogFings',
      startDate: '12/30/2017 12:00:00 AM',
      endDate: '12/31/2017 12:00:00 AM',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quod, officia expedita aliquid vero dolorum, veritatis perferendis illum esse dicta nulla aspernatur earum itaque dolorem id distinctio, voluptatibus voluptatem nesciunt!',
      location: {
        address: '123 Muffin Lane, Columbus, Ohio',
        lat: 0,
        long: 0
      },
      requiredSkills: ['cash handling', 'communication', 'juggling']
    }
    return (
      <div>
        <h1>{mockData.title}</h1>
        <div>
          <ul>
            <li>{mockData.startDate}</li>
            <li>{mockData.endDate}</li>
          </ul>
          <button>Interested</button>
        </div>
        <div>
          <Link to={"/profile/"+mockData.userid}><h1>{mockData.nonProfit}</h1></Link>
          <h2>{`in ${mockData.location.address}`}</h2>
          <div>
            <img src={Example} alt="placeholder"/>
          </div>
          <p>{mockData.description}</p>
        </div>
        <div>
          <h2>Desired Skills Needed</h2>
          <ul>
            {mockData.requiredSkills.map((skill, idx) => {
              return <li key={idx}>{skill}</li>
            })}
          </ul>
        </div>

      </div>
    );
}

export default Opportunity
