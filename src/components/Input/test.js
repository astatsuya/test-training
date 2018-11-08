/* global it, describe expect */
import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';


describe('Input', () => {
  const wrapper = shallow(<Input />);
  it('Exists <Input /> ', () => {
    expect(wrapper.exists()).toBe(true);
  });
  describe('setState', () => {
    it('setstate.name', () => {
      expect(wrapper.state().name).not.toEqual('test')
      wrapper.setState({ name: 'test'});
      expect(wrapper.state().name).toEqual('test')
    });
    it('Click to reset state.name and alert', () => {
      window.alert = jest.fn();
      // wrapper.setState({ name: 'test'});
      // expect(wrapper.state().name).toEqual('test')
      wrapper.instance().handleClick();
      expect(wrapper.state().name).toEqual('')
      expect(window.alert).toHaveBeenCalled();
    });
  });
});
