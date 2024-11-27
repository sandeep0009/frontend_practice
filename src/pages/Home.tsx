import Faq from "../components/Faq"
import Feature from "../components/Feature"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Table from "../components/Table"


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Table/>
        <Feature/>
        <Faq/>
        <Footer/>
    </div>
  )
}

export default Home