import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'; 
import App from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('shallow: App renders without crashing', () => {
  shallow(<App />);
});

it('renders a welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = <h2>Welcome</h2>

  expect(wrapper).toContainReact(welcome);
})
