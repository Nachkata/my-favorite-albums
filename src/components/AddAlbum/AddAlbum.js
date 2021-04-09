import style from "../AddAlbum/AddAlbum.css"
import * as albumService from '../../service/albumService'

const AddAlbum = () => {
    const onCreateAlbumSubmitHandler = (e) =>{
        e.preventDefault()
        albumService.create(
            e.target.name.value, 
            e.target.artist.value, 
            e.target.description.value,
            e.target.imageURL.value,
            e.target.rating.value)
    }
    return (
        <div class="site-content body">
            <div class="create-form">
                <h4>ADD YOUR CUSTOM ALBUM</h4>
                <form onSubmit={onCreateAlbumSubmitHandler}>
                    <p>Name</p>
                    <input type="text" name="name" placeholder="Name" />
                    <p>Artist</p>
                    <input type="text" name="artist" placeholder="Artist" />
                    <p>Description</p>
                    <textarea name="Text1" cols="40" rows="5" name="description" placeholder="Album Descrpition"></textarea>
                    <p>ImageURL</p>
                    <input type="text" name="imageURL" placeholder="imageURL" />
                    <p>Rating</p>
                    <select name="rating">
                        <option value="-">Rate the album</option>
                        <option value="10">10</option>
                        <option value="9">9</option>
                        <option value="8">8</option>
                        <option value="7">7</option>
                        <option value="6">6</option>
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>
                    <button type="submit">Add album</button>
                </form>
            </div>
        </div>
    )
}
export default AddAlbum