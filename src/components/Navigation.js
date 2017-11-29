import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const Navigation = ({ links, menu, mobileActive, handleMobile }) => (
  <div>
    <div>
      <div>
        <nav>
          {links.map(({ href, title }) => (
            <Link key={href} to={href}>
              <div>{title}</div>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  </div>
)

Navigation.propTypes = {
  links: PropTypes.array.isRequired,
  menu: PropTypes.string.isRequired,
  mobileActive: PropTypes.bool.isRequired,
  handleMobile: PropTypes.func.isRequired,
}

export default Navigation
