import * as React from 'react';
import { shallow } from 'enzyme';
import { Counter } from '../Counter';

describe('Counter', () => {
  describe('render', () => {
    test('Debería renderizar un CounterButton con propiedad undefined', () => {
      const wrapper = shallow(<Counter />);
      expect(
        wrapper.find('CounterButton').at(0).prop('isIncrement')
      ).toBeTruthy();
    });
    test('Debería renderizar un CounterButton con propiedad decrement', () => {
      const wrapper = shallow(<Counter />);
      expect(
        wrapper.find('CounterButton').at(1).prop('isIncrement')
      ).toBeFalsy();
    });
  });
});
