const Header = () => {
    return (
        <header className="container ">

            <figure>
                <a href="">
                    <img src="./dc-logo.png" alt="Logo" />
                </a>
            </figure>

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
            </nav>
        </header>
    )
}

export default Header