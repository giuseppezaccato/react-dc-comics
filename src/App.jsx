//task importo da components via ESM i moduli per comporre la pagina
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

//task import dai data links.js
import links from "./data/links"

function App() {

  // const links = [
  //   { id: 1, text: 'Characters', url: '#', current: false },
  //   { id: 2, text: 'Comics', url: '#', current: true },
  //   { id: 3, text: 'Movies', url: '#', current: false },
  //   { id: 4, text: 'TV', url: '#', current: false },
  //   { id: 5, text: 'Games', url: '#', current: false },
  //   { id: 6, text: 'Collectibles', url: '#', current: false },
  //   { id: 7, text: 'Videos', url: '#', current: false },
  //   { id: 8, text: 'Fans', url: '#', current: false },
  //   { id: 9, text: 'News', url: '#', current: false },
  //   { id: 10, text: 'Shop', url: '#', current: false },
  // ];


  return (
    <>
      <Header appLinks={links} />
      <Main />
      <Footer />
    </>
  )
}

export default App
