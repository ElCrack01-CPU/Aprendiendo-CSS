import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { CardCarousel } from './components/CardCarousel'
import './styles.css'
import { Feature } from './components/Feature'
import { Testimonials } from './components/Testimonials'
import { testimonialsData } from './components/data/testimonials'
import { Footer } from './components/Footer'


export const Home = () => {
  return (
    <div className='app' >
    <Header userName={"Jonathan09"} />
    <Hero username={"Jonathan09"} />
    <CardCarousel />
    <Feature/>
    <Testimonials testimonials={testimonialsData} />
    <Footer/>

    </div >
  )
}
