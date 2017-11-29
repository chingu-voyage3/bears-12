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
        }
      ],
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

  render () {
    return (
      <Navigation
        links={this.state.links}
        menu={this.state.menu}
        mobileActive={this.state.mobileActive}
        handleMobile={(e, close) => this.handleMobile(e, close)} />
    )
  }
}

export default NavContainer
