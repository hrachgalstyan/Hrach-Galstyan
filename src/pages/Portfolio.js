import React, { useEffect} from 'react'
import Background from '../components/Background'
import Footer from '../components/Footer'
import Recipes from '../assets/Recipes.png'
import Resort from '../assets/Resort.png'
import TechStore from '../assets/Tech-Store.png'
import { Row, Col } from 'reactstrap'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Portfolio() {
    useEffect(() => {
        AOS.init({})
    }, [])
    return (
        <>
            <Background title='PORTFOLIO' />
            <div className="page">
                {/* {data.map(item => {
                    return <Page key={item.id} title={item.title} image={item.image} description={item.description} reverse={item.reverse} align={item.align} dataalign={item.dataalign} />
                })} */}
                <h2 data-aos="fade-right" data-aos-duration="1000" className="d-block text-center mt-5">Programming skills</h2>
                <p data-aos="fade-up" data-aos-duration="1000" className="facts-paragraph front-end mt-3 mx-auto text-justify my-5" style={{fontSize: '20px'}}>Front end engineer believing in the power of web development. Experienced in all stages of advanced front end development. Focused on single-page application development, CSS/JS animations, semantics, accessibility, and progressive enhancement. However, I'm keen on exploring new languages and I always try to stay up-to-minute. Apart from these, I have other computer skills, such as I fluently use Adobe XD, Photoshop and Figma for designing the websites before coding them. I also have basic knowledge in Adobe After Effect and Premier Pro and I use them as a hobby. </p>
                <a data-aos="zoom-in" data-aos-duration="1000" href="https://react-app-resort.netlify.app/" target="_blank" className="portfolio-img d-flex justify-content-center my-3">
                    <img src={Resort} className="img-fluid image" width="1000px" alt="Resort" />
                </a>
                <a data-aos="zoom-in" data-aos-duration="1000" href="https://baxadratomser.netlify.app/" target="_blank" className="portfolio-img d-flex justify-content-center my-3">
                    <img src={Recipes} className="img-fluid image" width="1000px" alt="Resort" />
                </a>
                <a data-aos="zoom-in" data-aos-duration="1000" href="https://react-create-app-tech-store.netlify.app/" target="_blank" className="portfolio-img d-flex justify-content-center my-3">
                    <img src={TechStore} className="img-fluid image" width="1000px" alt="Resort" />
                </a>
                <Footer />
            </div>
        </>
    )
}
