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
                <div className="container">
                    <h1>  contenuto fumetti qui </h1>
                </div>
            </main>
            <nav>
                <ul className="container">
                    <li><a href="#"> <img src={comics} alt="comics" /></a><p>digital comics</p></li>
                    <li><a href="#"> <img src={merch} alt="merch" /></a><p>dc merchandise</p></li>
                    <li><a href="#"> <img src={shop} alt="shop" /></a><p>subscriptions</p></li>
                    <li><a href="#"> <img src={sub} alt="sub" /></a><p>comic shop locator</p></li>
                    <li><a href="#"> <img src={buy} alt="buy" /></a><p>dc power visa</p></li>
                </ul>
            </nav>
        </>
    )
}

export default Main