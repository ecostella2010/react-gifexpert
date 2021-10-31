import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import './index.css';

export const GifExpertApp = ({ defaultCategories = [] } ) => {
    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    //const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])
    //const [categories, setCategories] = useState(['One Punch']);
    const [categories, setCategories] = useState( defaultCategories );
    // const handleAdd = () =>{
    //     //Para agregar al final
    //     //setCategories( [ ...categories, 'HunterXHunter' ] ); 
    //     //Para agregar al principio
    //     //setCategories( [ 'HunterXHunter', ...categories  ] ); 
    //     //Otra forma es:
    //     setCategories( cats => [ ...cats, 'HunterXHunter'  ] );
    // }

    //console.log ('categories');
    //console.log (categories);
    return (
        <>
           <h2> GifExpertApp </h2>
           <AddCategory setCategories = { setCategories }/>
           <hr />

            <ol>
                {   
                    // categories.map( (category, i) => {
                    //     return <li key = {category } > { category }  </li>
                    // })
                    
                    // categories.map( (category, i) => (
                    //     <li key = {category } > { category }  </li>)
                    // )

                    categories.map( ( category, key ) => (
                        
                        <GifGrid
                            key = { key } 
                            category = { category }
                        />
                        
                        )
                    )
                        

                }
            </ol>
        </>  
    )
}

//export default GitExpertApp;