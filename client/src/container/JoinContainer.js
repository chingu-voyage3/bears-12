import React, { Component } from 'react';

/**
 * SignUpContainer
 */
export class SignUpContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props)
    this.state = {
      role: ''
    }
  }
  userRoleSelection(role) {
    this.setState({ role });
  }
  render() {
    const btnStyle = {
      border: '1px solid black',
      padding: 30
    }
    const buttonOutline = {
      border: '1px solid black'
    };

    console.log(this.state.role);

    return (
      <div>
        <div>
          <h2>Why you should join OfferYou</h2>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure inventore voluptas, enim deserunt sit deleniti aperiam earum unde quasi quaerat! Atque provident incidunt sint nulla nemo culpa vero non molestiae.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis modi rem harum accusamus sequi doloribus autem, ad illo delectus debitis minus ducimus eum maxime voluptatibus perferendis reiciendis ullam, placeat, facere.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet tempore facilis excepturi tenetur corporis sunt, necessitatibus atque at nisi quasi expedita aliquam officia, saepe laborum esse ex laboriosam quam voluptatibus.</li>
          </ul>
        </div>
        <div>
          <form action="">
            <ul>
              <li>
                <div style={btnStyle} id="volunteer" onClick={() => this.userRoleSelection('volunteer')}>
                  Volunteer
                </div>
              </li>
              <li>
                <div style={btnStyle} id="nonProfit" onClick={() => this.userRoleSelection('nonprofit')}>
                  NonProfit
                </div>
              </li>
            </ul>
          </form>
        </div>
        <div>
          <ul style={ {listStyle: 'none'} }>
            <li>
              <div style={buttonOutline}>
                <span>Sign up with Facebook</span>
              </div>
            </li>
            <li>
              <div style={buttonOutline}>
                <span>Sign up with Linkedin</span>
              </div>
            </li>
            <li>
              <div style={buttonOutline}>
                <span>Sign up with Twitter</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

// SignUpContainer.propTypes = {
//   prop: PropTypes.type.isRequired
// }

export default SignUpContainer;
