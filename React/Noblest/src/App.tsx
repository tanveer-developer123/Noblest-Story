import './App.css'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Footer from './components/Footer'
// import About from './pages/About'
import Contact from './pages/Contact'
import Hero from './pages/Hero'
import Being from './components/Being'
import Fresh_ins from './components/Fresh_ins'
import Connect from './components/Connect'
import How_work from './components/How_work'
import Faqs from './components/Faqs'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
      <Being/>
      <Fresh_ins/>
      {/* Designing Part */}
      <Connect/>
      <How_work/>
      <Faqs/>
      <Contact />
      <Footer />

    </>
  )
}

export default App
