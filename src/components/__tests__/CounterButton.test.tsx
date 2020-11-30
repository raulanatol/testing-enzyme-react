import * as React from 'react';
import { shallow } from 'enzyme';
import { CounterButton } from '../CounterButton';

describe('CounterButton', () => {
  describe('render', () => {
    test('Debería renderizar un botón con texto +', () => {
      const wrapper = shallow(<CounterButton/>);
      expect(wrapper.find('button').text()).toBe('+');
    });
    test('Debería renderizar un botón con texto + cuando el tipo sea increment', () => {
      const wrapper = shallow(<CounterButton type="increment"/>);
      expect(wrapper.find('button').text()).toBe('+');
    });
    test('Debería rendirizar un boton con - cuando el tipo sea decrement', () => {
      const wrapper = shallow(<CounterButton type="decrement"/>);
      expect(wrapper.find('button').text()).toBe('-');
    });
  });
});
