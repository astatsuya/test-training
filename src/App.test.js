/* global it, describe expect */
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('App renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
  it('has <Input />', () => {
    const wrapper = shallow(Input);
    expect(wrapper.exists()).not.toBe(true);
  });
});
