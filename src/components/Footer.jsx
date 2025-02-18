import fb from "../assets/img/footer-facebook.png"
import peri from "../assets/img/footer-periscope.png"
import pint from "../assets/img/footer-pinterest.png"
import tw from "../assets/img/footer-twitter.png"
import yt from "../assets/img/footer-youtube.png"

const Footer = () => {

    return (
        <>
            <footer >
                <div className="footerLogo">

                    <div>
                        <ul>
                            <li><a className="title" href="#">DC COMICS</a></li>
                            <li><a href="#">Characters</a></li>
                            <li><a href="#">Comics</a></li>
                            <li><a href="#">Movies</a></li>
                            <li><a href="#">Tv</a></li>
                            <li><a href="#">Games</a></li>
                            <li><a href="#">Videos</a></li>
                            <li><a href="#">News</a></li>
                        </ul>

                        <ul>
                            <li><a className="title" href="#">SHOP</a></li>
                            <li><a href="#">Shop DC</a></li>
                            <li><a href="#">Shop DC Collectibles</a></li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <li><a className="title" href="#">DC</a></li>
                            <li><a href="#">Terms Of Use</a></li>
                            <li><a href="#">Privacy policy(new)</a></li>
                            <li><a href="#">Ad Choices</a></li>
                            <li><a href="#">Advertising</a></li>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Subscriptions</a></li>
                            <li><a href="#">Talent Workshops</a></li>
                            <li><a href="#">CPSC Certificate</a></li>
                            <li><a href="#">Ratings</a></li>
                            <li><a href="#">Shop Help</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <li><a className="title" href="#">SITES</a></li>
                            <li><a href="#">DC</a></li>
                            <li><a href="#">MAD Magazine</a></li>
                            <li><a href="#">DC Kids</a></li>
                            <li><a href="#">DC Universe</a></li>
                            <li><a href="#">DC Power Visa</a></li>
                        </ul>
                    </div>

                </div>


            </footer>

            <div className="bgFooter">

                <div className="container contacts">

                    <div className="btn">
                        <a className="title" href="#">SIGN UP NOW</a>
                    </div>
                    <ul>
                        <li><a className="title blue" href="#">FOLLOW US</a></li>
                        <li><a href="#"><img src="../assets/img/footer-facebook.png" alt="" /></a></li>
                        <li><a href="#"><img src={fb} alt="facebook" /></a></li>
                        <li><a href="#"><img src={peri} alt="periscope" /></a></li>
                        <li><a href="#"><img src={pint} alt="pinterest" /></a></li>
                        <li><a href="#"><img src={tw} alt="twitter" /></a></li>
                        <li><a href="#"><img src={yt} alt="youtube" /></a></li>
                    </ul>
                </div>
            </div>

        </>

    )
}



export default Footer