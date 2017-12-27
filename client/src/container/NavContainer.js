import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import Navigation from '../components/Navigation'

class NavContainer extends Component {
  constructor () {
    super()
    this.state = {
      mobileActive: false,
      links: [
        {
          href: '/',
          title: 'Home',
        },
        {
          href: '/login',
          title: 'Login'
        },
        {
          href: '/join',
          title: 'Join'
        },
        {
          href: '/search',
          title: 'Search'
        }
      ],
      inOrOut: false,
      menu: 'Menu',
    }
  }

  // componentDidMount () {
  //  this.props.history.listen((location, action) => {
  //     if(action === "POP") {
  //       this.setState({ mobileActive: false })
  //     }
  //   })
  // }

  handleMobile (e, close) {
    if (close && !this.state.mobileActive) {
      return
    }

    this.setState((prevState) => ({
      mobileActive: prevState.mobileActive
        ? !prevState.mobileActive
        : true,
    }))
  }

  loginMenu () {
      const loggedInLinks = {
      links: [
      {
        href: '/',
        title: 'Home',
      },
      {
        href: '/profile/'+this.props.userid,
        title: 'Profile'
      },
      {
        href: '/announcement',
        title: 'Announcement'
      },
      {
        href: '/myopportunities',
        title: 'MyOpportunities'
      },
      {
        href: '/search',
        title: 'Search'
      }
    ],
    inOrOut: true
  }

  const loggedOutLinks = {
    links: [
      {
        href: '/',
        title: 'Home',
      },
      {
        href: '/login',
        title: 'Login'
      },
      {
        href: '/join',
        title: 'Join'
      },
      {
        href: '/search',
        title: 'Search'
      }
    ],
    inOrOut: false
  };
      if (!this.state.inOrOut) {
          this.setState(loggedInLinks);
      } else {
          this.setState(loggedOutLinks);
      }
  }

  render () {
    //This is the styling to add a button to see the logged-in menue.
    //Remove button once login functionality has been added.
    const style = {
        width: '50px',
        height: '40px',
        backgroundColor: 'blue',
        color: 'white',
        transform: 'translate(0, -100px)'
    }
    return (
      <div>
        <Navigation
          links={this.state.links}
          menu={this.state.menu}
          mobileActive={this.state.mobileActive}
          handleMobile={(e, close) => this.handleMobile(e, close)} />
        <div style={style} onClick={() => this.loginMenu()}>Dev Button</div>
      </div>
    )
  }
}

export default NavContainer
