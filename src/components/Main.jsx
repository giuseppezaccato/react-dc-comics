import comics from "../assets/img/buy-comics-digital-comics.png"
import merch from "../assets/img/buy-comics-merchandise.png"
import shop from "../assets/img/buy-comics-shop-locator.png"
import sub from "../assets/img/buy-comics-subscriptions.png"
import buy from "../assets/img/buy-dc-power-visa.svg"

const Main = () => {

    return (
        <>
            <main >
                <h1>contenuto fumetti qui</h1>

            </main>
            <nav>
                <ul className="container">
                    <li><a href="#"> <img className="resize" src={comics} alt="comics" /></a><div>buy comics</div></li>
                    <li><a href="#"> <img className="resize" src={merch} alt="merch" /></a><div>buy comics</div></li>
                    <li><a href="#"> <img className="resize" src={shop} alt="shop" /></a><div>buy comics</div></li>
                    <li><a href="#"> <img className="resize" src={sub} alt="sub" /></a><div>buy comics</div></li>
                    <li><a href="#"> <img className="resize" src={buy} alt="buy" /></a><div>buy comics</div></li>
                </ul>

            </nav>
        </>
    )
}

export default Main