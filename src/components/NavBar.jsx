// import links from "../data/links" //* esperimento

// const links = [
//     { id: 1, text: 'Characters', url: '#', current: false },
//     { id: 2, text: 'Comics', url: '#', current: true },
//     { id: 3, text: 'Movies', url: '#', current: false },
//     { id: 4, text: 'TV', url: '#', current: false },
//     { id: 5, text: 'Games', url: '#', current: false },
//     { id: 6, text: 'Collectibles', url: '#', current: false },
//     { id: 7, text: 'Videos', url: '#', current: false },
//     { id: 8, text: 'Fans', url: '#', current: false },
//     { id: 9, text: 'News', url: '#', current: false },
//     { id: 10, text: 'Shop', url: '#', current: false },
// ];


const NavBar = (navProps) => {
    // const { headerLinks } = navProps //? il destructuring aiuta a capire l'origine di navProps

    return (
        <nav>
            <ul>{
                navProps.headerLinks.map(e => <li key={e.id} > <a className={e.current ? "active" : ""} href={e.url} > {e.text} </a> </li>)
            }
            </ul>
        </nav>
    )
}

export default NavBar