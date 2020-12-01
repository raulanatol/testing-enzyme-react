import * as React from 'react';
import { shallow } from 'enzyme';
import { Counter } from '../Counter';

describe('CounterButton', () => {
    describe('render', () => {
        test('Debería renderizar un botón con texto +', () => {
            const wrapper = shallow(<Counter type="increment"/>);
            expect(wrapper.find('button').text()).toBe('+');
        });
    });

    describe('render', () => {
        test('Debería renderizar un botón con texto -', () => {
            const wrapper = shallow(<Counter type="decrement"/>);
            expect(wrapper.find('button').text()).toBe('-');
        });
    });
});
