import NavBar from "./NavBar"

const Header = (headerProps) => {
    return (
        <header className="container ">

            <figure>
                <a href="">
                    <img src="./dc-logo.png" alt="Logo" />
                </a>
            </figure>

            <NavBar headerLinks={headerProps.appLinks} />

        </header>
    )
}


//task sostituisco dinamicamente con <NavBar /> il contenuto statico sottostante
{/*             
            <nav>
                <ul>
                    <li><a href="#">Characters</a></li>
                    <li><a href="#" className="active">comics</a></li>
                    <li><a href="#">Movies</a></li>
                    <li><a href="#">Tv</a></li>
                    <li><a href="#" >games</a></li>
                    <li><a href="#">collectibles</a></li>
                    <li><a href="#">videos</a></li>
                    <li><a href="#">fans</a></li>
                    <li><a href="#">news</a></li>
                    <li><a href="#">shop</a></li>
                </ul>
            </nav> */}

export default Header