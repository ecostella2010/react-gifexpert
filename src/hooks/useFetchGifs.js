import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect ( () => {
        //getGifs ()
        //getGifs( category )
        // .then(imgs => setImages( imgs ))
        //.then( setImages )
        //}, [ category ]);

        getGifs ( category ) 
        .then( imgs => { setState   ({
                                        data: imgs,
                                        loading: false
                                    });
                        });    
    }, [ category ]);

    // setTimeout(() => {
    //     setState({
    //         data: [1,2,3,4],
    //         loading: false
    //     });
    // }, 3000);

    return state;  // { data:[], loading: true };
}