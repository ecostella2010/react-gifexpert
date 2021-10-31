import React from 'react'; 
import { shallow } from 'enzyme';

import '@testing-library/jest-dom';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en AddCategory', () => {
    const setCategories = jest.fn();
    let wrapper = shallow ( < AddCategory setCategories = { setCategories }/> );
    //__snapshots__const setCategories = () => {};
    
    beforeEach ( () => {
        jest.clearAllMocks();
        wrapper = shallow ( < AddCategory setCategories = { setCategories }/> );
    });

    test('debe de mostrar < AddCategory /> correstamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {
        const value = 'Hola Mundo';
        const input = wrapper.find('input');
        input.simulate('change', { target : { value }});
        //expect ( wrapper.find('p').text().trim() ).toBe ( value );
        expect ( wrapper.find('input').prop('value')).toBe ( value );
    });

    test('no debe de postear la infomacion con submit', () => {
        wrapper.find ('form').simulate('submit', { preventDefault(){} });

        expect ( setCategories ).not.toHaveBeenCalled();
    });

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {


        //1.- Simular el inputChange
        const value = 'Hola Mundo';
        wrapper.find('input').simulate('change', { target : { value }});
        //expect ( wrapper.find('p').text().trim() ).toBe ( value );
        expect ( wrapper.find('input').prop('value')).toBe ( value );
        //2.- Simular el Submit
        wrapper.find ('form').simulate('submit', { preventDefault(){} });
        //3.- setCategories se debe de haber llamado 
        expect ( setCategories ).toHaveBeenCalled();
        expect ( setCategories ).toHaveBeenCalledTimes(1);
        expect ( setCategories ).toHaveBeenCalledWith( expect.any(Function));
        //4.- el valor del imput debe estar ''
        expect ( wrapper.find('input').prop('value')).toBe ( '' );
    })
    
    
    
    



})
