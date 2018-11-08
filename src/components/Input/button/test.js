/* global it, describe expect */
import React from 'react';
import { shallow } from 'enzyme';
import Button from './button';


describe('Button', () => {
  it('Exists <Button /> ', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.exists()).toBe(true);
  });
  describe('Button', () => {
    it('click', () => {
      const handleClick = jest.fn()
      const wrapper = shallow(<Button handleClick={handleClick} />);
      wrapper.find('button').simulate('click');
      expect(handleClick).toHaveBeenCalled();
    });
  });
});
