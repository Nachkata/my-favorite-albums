import style from "../Main/Main.css"
import { Link } from "react-router-dom";

const Main = () => {
    return (
        <div className="site-content">
            <h1>PLEASE, CHOOSE AN ALBUM</h1>
            <div class="body-main">
            <div class="card">
                <div class="imgBx">
                    <img src="https://static.qobuz.com/images/covers/qc/2e/wv6zsdv3g2eqc_600.jpg" />
                </div>
                <div class="contentBx">
                    <h3>Goodbye And Good Ridance</h3>
                    <h3>Juice Wrld</h3>
                </div>
                <button class="btn"><Link to="/details/0001">DETAILS</Link></button>
            </div>
            <div class="card">
                <div class="imgBx">
                    <img class="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpB9WL7XfkMHquhmWlSKcIe9YdslKu3Rl3kQ&usqp=CAU" />
                </div>
                <div class="contentBx">
                    <h3>Die Lit</h3>
                    <h3>Playboi Carti</h3>
                </div>
                <button class="btn"><Link to="/details/0002">DETAILS</Link></button>
            </div>
        </div>
        </div>
    )
}
export default Main