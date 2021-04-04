import style from "../AddAlbum/AddAlbum.css"

const AddAlbum = () => {
    return (
        <div class="site-content body">
            <div class="create-form">
                <h4>ADD YOUR CUSTOM ALBUM</h4>
                <form>
                    <p>Name</p>
                    <input type="text" name="name" placeholder="Name" />
                    <p>Artist</p>
                    <input type="text" name="artist" placeholder="Artist" />
                    <p>Description</p>
                    <textarea name="Text1" cols="40" rows="5" name="description" placeholder="Album Descrpition"></textarea>
                    <p>ImageURL</p>
                    <input type="text" name="imageURL" placeholder="imageURL" />
                    <p>Rating</p>
                    <select>
                        <option value="0">Rate the album</option>
                        <option value="1">10</option>
                        <option value="2">9</option>
                        <option value="3">8</option>
                        <option value="4">7</option>
                        <option value="5">6</option>
                        <option value="6">5</option>
                        <option value="7">4</option>
                        <option value="8">3</option>
                        <option value="9">2</option>
                        <option value="10">1</option>
                    </select>
                    <button type="submit">Add album</button>
                </form>
            </div>
        </div>
    )
}
export default AddAlbum