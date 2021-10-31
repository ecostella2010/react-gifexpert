import React from 'react'; 
import { shallow } from 'enzyme';

import '@testing-library/jest-dom';
import { GifGrid } from '../../components/gifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Prueba en GifGrid', () => {
    const category = 'One Punch';

    //let wrapper = shallow( <GifGrid category = { category } />);

    // beforeEach ( () => {
    //     jest.clearAllMocks();
    //     wrapper = shallow( <GifGrid category = { category } />);
    // });
    
    test('debe de mostar < GifGrid /> correstamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category = { category } />);

        expect( wrapper ).toMatchSnapshot();
    });


    test('debe de mostrar items cuando se cargan imagenes suseFetchGifs', () => {

        const  gifs = [
            {
                id: 'ABC',
                url: 'https://localhost/cualquie/cosa.jpg',
                title: 'Cualquier cosa'
            },
            {
                id: '123',
                url: 'https://localhost/cualquie/cosa.jpg',
                title: 'Cualquier cosa'
            }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow( <GifGrid category = { category } />);
        //expect( wrapper ).toMatchSnapshot();
        expect ( wrapper.find('p').exists() ).toBe( false );
        expect ( wrapper.find('GifGridItem').length ).toBe( gifs.length );

       
    })
    

});
