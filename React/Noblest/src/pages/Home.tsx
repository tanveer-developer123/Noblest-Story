import Being from "../components/Being"
import Cards from "../components/Cards"
import Connect from "../components/Connect"
import Contact from "../components/Contact"
import Designing from "../components/Designing"
import Faqs from "../components/Faqs"
import Footer from "../components/Footer"
import Fresh_ins from "../components/Fresh_ins"
import Hero from "../components/Hero"
import How_work from "../components/How_work"
import Navbar from "../components/Navbar"

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Cards />
            <Being />
            <Designing/>
            <Fresh_ins />
            <Connect />
            <How_work />
            <Faqs />
            <Contact />
            <Footer />
        </>
    )
}

export default Home
