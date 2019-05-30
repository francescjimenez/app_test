import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import About from '../ordersForm.container';


describe('About.test.js', () => {

    it('renders as expected', () => {
        const wrapper = shallow(<About match={{params: {id: 1}}}/>);

        expect(wrapper.length).toEqual(1);

        const tree = toJson(wrapper);
        expect(tree).toMatchSnapshot();

    });
});
