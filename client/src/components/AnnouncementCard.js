import React from 'react'
import { Link } from 'react-router-dom'

const AnnouncementCard = (props) => {
  return (
    <li>
      <div>
        <Link to={"/opportunity/"+props.message.nonProfit}>{props.message.nonProfit}</Link>
        <p>{props.message.dateSent}</p>
        <div>
          <p>{props.message.body}</p>
        </div>
      </div>
    </li>
  )
}

export default AnnouncementCard
