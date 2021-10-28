


export const getGifs = async(category) => {
    //console.log('category:', category);
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=HQYcz1cE4MrSnWH5veByJYYTwqBXu7zz`;
    //console.log (url);
    const resp = await fetch ( url );
    //const data = await resp.json();
    //Uso Restructuración 
    const { data } = await resp.json();
    //console.log( data );
    
    return data.map ( img => {
        return {
            id : img.id,
            title : img.title,
            url : img.images?.downsized_medium.url
        }
    })

    //return gifs;

    //console.log( gifs );
    //setImages(gifs);
    //console.log( images );

    
    
}

