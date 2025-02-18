//task importo le immagini
import comics from "../assets/img/buy-comics-digital-comics.png"
import merch from "../assets/img/buy-comics-merchandise.png"
import shop from "../assets/img/buy-comics-shop-locator.png"
import sub from "../assets/img/buy-comics-subscriptions.png"
import buy from "../assets/img/buy-dc-power-visa.svg"

const Main = () => {

    return (
        <>
            <main >
                <h1>  contenuto fumetti qui </h1>
            </main>
            <nav>
                <ul className="container">
                    <li><a href="#"> <img src={comics} alt="comics" /></a><div>digital comics</div></li>
                    <li><a href="#"> <img src={merch} alt="merch" /></a><div>dc merchandise</div></li>
                    <li><a href="#"> <img src={shop} alt="shop" /></a><div>subscriptions</div></li>
                    <li><a href="#"> <img src={sub} alt="sub" /></a><div>comic shop locator</div></li>
                    <li><a href="#"> <img src={buy} alt="buy" /></a><div>dc power visa</div></li>
                </ul>
            </nav>
        </>
    )
}

export default Main