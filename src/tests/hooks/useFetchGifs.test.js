import React from 'react'; 
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGifs';

import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifs', () => {

    test('debe de retornar el estado inicial', async () => {
        // const resp = renderHook( () => useFetchGifs( 'One Punch' ));
        // console.log( resp );
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ));
        //console.log( result );
        const { data, loading } = result.current;
        //console.log(data, loading);

        await waitForNextUpdate();
     
        expect ( data ).toEqual ([]);
        expect ( loading ).toBe ( true );
    });

    test('debe de retornar un arreglo de imgs y el loading en false', async () => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ));
        await waitForNextUpdate();
        const { data, loading } = result.current;
        expect ( data.length ).toBe (10);
        expect ( loading ).toBe ( false );
    });
    
    
    
})
