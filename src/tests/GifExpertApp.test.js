import React from 'react'; 
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

import '@testing-library/jest-dom';

describe('Pruebas de GifExpertApp', () => {
    
    test('debe de mostar < GifExpertApp /> correstamente', () => {
        const wrapper = shallow( <GifExpertApp  />);
        expect( wrapper ).toMatchSnapshot();
        
    });

    test('debe de mostrar una lista de categorias', () => {
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow( <GifExpertApp defaultCategories = { categories } />);
        expect( wrapper.find( 'GifGrid').length ).toBe(categories.length);
    });
    
    
});
