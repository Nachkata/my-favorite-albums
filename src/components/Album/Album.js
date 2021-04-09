import { Link } from "react-router-dom";

const Album = ({
    album,
}) => {
    return (
        <div class="card">
            <div class="imgBx">
                <img src={album.imageURL} />
            </div>
            <div class="contentBx">
                <h3>{album.name}</h3>
                <h3>{album.artist}</h3>
            </div>
            <button class="btn"><Link to="/details/0001">DETAILS</Link></button>
            <button class="btn">LIKE &#10084;&#65039;</button>
        </div>
    )
}
export default Album