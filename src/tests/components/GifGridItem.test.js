import { shallow } from 'enzyme';
import React from 'react'; 
import '@testing-library/jest-dom';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en GifGridItem', () => {
    let wrapper = shallow ( < GifGridItem />);

    const title = 'Un titulo'; 
    const url = 'https://localhost/algo.jpg';

    beforeEach ( () => {
        wrapper = shallow ( < GifGridItem title = {title} url = {url} /> );
    });

    test('debe mostrar  < GifGridItem /> correstamente', () => {
        expect (wrapper).toMatchSnapshot();
    });

    test('debe de tener un párrafo con el title', () => {

        const p = wrapper.find('p');
        expect (p.text().trim() ).toBe ( title );
        
    });

    test('debe de tener la imagen igual al url y alt de los props', () => {
        
        const img = wrapper.find('img');

        // console.log (img.html());
        // console.log (img.props());
        // console.log (img.prop('src'));
        // console.log (img.props().src);
        // console.log (img.props().alt);

        expect(img.prop('src')).toBe (url);
        expect(img.prop('alt')).toBe (title);
    });
    
    test('debe de tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        //console.log (div.prop('className'));
        expect(className).toContain ('animate__fadeIn');
        expect(className.includes('animate__fadeIn')).toBe( true );
    });
    
    

})


