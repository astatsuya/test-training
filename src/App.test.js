/* global it, describe expect */
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('App renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
  it('exists child component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Input').length).toBe(1);
  });
});
