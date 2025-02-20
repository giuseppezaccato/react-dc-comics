//task importo da components via ESM i moduli per comporre la pagina
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

//task import dai data links.js
import links from "./data/links"

//task import comics
import comics from './data/comics'

function App() {

  return (
    <>
      <Header appLinks={links} />
      <Main appComics={comics} />
      <Footer />
    </>
  )
}

export default App
