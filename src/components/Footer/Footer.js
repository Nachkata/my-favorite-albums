import style from "../Footer/Footer.css"

const Footer = () => {
    return (
        <div class="footer">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
            <div class="main-content">
                <div class="left box">
                    <h2>Contacts</h2>
                    <div class="content">
                        <p>You can contact with us on our socials:</p>
                        <div class="social">
                            <a href="https://www.facebook.com/alexandernacho18/"><span class="fab fa-facebook-f"></span></a>
                            <a href="https://twitter.com/"><span class="fab fa-twitter"></span></a>
                            <a href="https://www.instagram.com/nnachkata/"><span class="fab fa-instagram"></span></a>
                            <a href="https://youtube.com/"><span class="fab fa-youtube"></span></a>
                            <a href="https://www.tiktok.com/@nachkata02?lang=en/"><span class="fab fa-tiktok"></span></a>
                        </div>
                    </div>
                </div>
                <div class="central box">
                    <h2>Adres</h2>
                    <div class="content">
                        <div class="phone">
                            <span class="fas fa-phone-alt"></span>
                            <span class="text">+3598888888</span>
                        </div>
                        <div class="place">
                            <span class="fas fa-map-marker-alt"></span>
                            <span class="text">Bourgas, Bulgaria</span>
                        </div>
                        <div class="email">
                            <span class="fas fa-envelope"></span>
                            <span class="text">nachkata_business@abv.bg</span>
                        </div>
                    </div>
                </div>
                <div class="right box">
                    <h2>Contact us</h2>
                    <div class="contact">
                        <form action="#">
                            <div class="email">
                                <div class="text">Email *</div>
                                <input type="email" required/>
                            </div>
                            <div class="msg">
                                <div class="text">Message *</div>
                                <textarea rows="2" cols="25" required></textarea>
                            </div>
                            <div class="button">
                                <button type="submit">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer
// .navigation a li{
//     display: table-cell;
//     vertical-align: top;
//     height: 100%;
//     color: white;
//     font-family: "Montserrat";
//     font-size: 17px;
// }