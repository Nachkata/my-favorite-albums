import style from "../Header/Header.css"
import { Link } from "react-router-dom";
const Header = ({
    email,
    isAuthenticated
}) => {
    return (
        <div class="header">
            <div class="inner_header">
                <div class="logo_container">
                    <h1>MY<span>ALBUMS</span></h1>
                </div>
                <ul class="navigation">
                    {isAuthenticated
                        ? <a><li>Hello, {email}</li></a>
                        : <a><li>Hello, Guest!</li></a>}
                    <a><li><Link to="/">HOME</Link></li></a>
                    {isAuthenticated
                        ? <a><li><Link to="/my-albums">MY ALBUMS</Link></li></a>
                        : <a><li><Link to="/login">LOGIN</Link></li></a>}
                    {isAuthenticated
                        ? <a><li><Link to="/add-album">ADD AN ALBUM</Link></li></a>
                        : <a><li><Link to="/register">REGISTER</Link></li></a>}
                    {isAuthenticated
                        ? <a><li><Link to="/logout">LOG OUT</Link></li></a>
                        : null}
                </ul>
            </div>
        </div>
    )
}
export default Header;