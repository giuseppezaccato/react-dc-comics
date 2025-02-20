//task importo le immagini
import comics from "../assets/img/buy-comics-digital-comics.png"
import merch from "../assets/img/buy-comics-merchandise.png"
import shop from "../assets/img/buy-comics-shop-locator.png"
import sub from "../assets/img/buy-comics-subscriptions.png"
import buy from "../assets/img/buy-dc-power-visa.svg"

//task import component
import Comics from "./Comics"

const Main = (mainProps) => {

    return (
        <>

            <main >

                <div className="jumbotron"> </div>

                <div className="container bg-black ">

                    {/* da qui mi aspetto adesso la lista iterata col map di tutti i fumetti */}
                    <Comics mainComics={mainProps.appComics} />

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