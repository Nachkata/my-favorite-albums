export const create = (albumName, artist, descrption, imageURL, rating) =>{
    let album = {
        name: albumName,
        artist,
        descrption,
        imageURL,
        rating
    }
    return fetch('http://localhost:5000/albums',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(album)
    });
}