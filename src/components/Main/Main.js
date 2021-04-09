import style from "../Main/Main.css"
import Album from "../Album/Album";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

//{this.state.albums.map(x=><Album name="{x.name}"/>)}
const Main = () => {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        let albums = fetch('http://localhost:5000/albums')
            .then(res => res.json())
            .then(res => setAlbums(res))
    }, [])
    console.log(albums);
    return (
        <div className="site-content body">
            <h1 class="please-choose">PLEASE, CHOOSE AN ALBUM</h1>
            <div class="body-main">
                {albums ? albums.map(album => (
                    <Album key={album.name} album={album}/>
                )) : null}
            </div>
        </div>
    )
}
export default Main