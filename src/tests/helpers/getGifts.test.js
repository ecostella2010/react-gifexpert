import { getGifs } from '../../helpers/getGifs';


describe('Pruebas en getGifs Fetch', () => {
    
    test('debe de traer 10 elementos', async( ) => {

        const gifs = await getGifs('One Punch');

        expect ( gifs.length ).toBe ( 10 );

    });

    test('debe de traer 0 elementos cuando no encuentre información', async( ) => {

        const gifs = await getGifs('');
        //console.log(gifs);
        expect ( gifs.length ).toBe ( 0 );

    });

});

