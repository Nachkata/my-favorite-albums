import style from "../Header/Header.css"
import {Link} from "react-router-dom";
const Header = () => {
    return (
    <div class="header">
        <div class="inner_header">
            <div class="logo_container">
                <h1>MY<span>ALBUMS</span></h1>
            </div>
            <ul class="navigation">
                <a><li><Link to="/">HOME</Link></li></a>
                <a><li><Link to="/login">LOGIN</Link></li></a>
                <a><li><Link to="/register">REGISTER</Link></li></a>
                <a><li><Link to="/add-album">ADD AN ALBUM</Link></li></a>
                <a><li><Link to="/my-albums">MY ALBUMS</Link></li></a>
                <a><li><Link to="/">LOG OUT</Link></li></a>
            </ul>
        </div>
    </div>
    )
}
export default Header;