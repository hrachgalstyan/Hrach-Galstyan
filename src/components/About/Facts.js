import React, { useEffect }from 'react'
import { Col } from 'reactstrap'
import aboutImg from '../../assets/About.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Facts() {
    useEffect(() => {
        AOS.init({
            duration: 2000
        })
    }, [])
    return (
        <>
        <div className="few-facts align-items-center mb-5">
            <div className="d-flex justify-content-center flex-wrap">
                <Col className="col-9 col-sm-7 col-md-7 col-lg-4 my-auto my-md-5 py-lg-5 mt-3 text-center">
                    <span className="facts-title d-block d-md-none text-center my-3">A FEW FUN FACTS ABOUT MYSELF</span>
                    <img data-aos="fade-right" src={aboutImg} className="img-fluid" alt="about me" style={{maxHeight: '600px'}} />
                </Col>
                <Col className="col-9 col-sm-7 col-md-7 col-lg-7 d-flex justify-content-center align-items-center my-auto">
                    <div>
                        <span data-aos="fade-left" className="facts-title d-none d-md-block">A FEW FUN FACTS ABOUT MYSELF</span>
                        <p data-aos="fade-left" className="facts-paragraph mt-3">Hello there! Before talking about qualifications and professional abilities, I would like to introduce myself. I am Hrach Galstyan and I am from Armenia. I am 20 years old and taking web development as a profession not only fulfils my pocket but also my heart because it has been my passion since my early teenage.

                        I believe that people should do things in which they are good at or in which their heart lays. That’s why I chose freelance web development as my career because I believe I’m good at this and mas I am always honest and I am never afraid of doing hard work.

                        I am studying at Armenian State University of Economics (ASUE) on international relationship faculty. I am started studying in 2017 and will graduate in 2021 as an Economist.

                        I am very much expert in using both React.js and Node.js.I also know the use of npm, Firebase, JavaScript, Bootstrap (React Bootstrap) etc. I have developed various websites to optimize their search engines and to create easier user interfaces.

                        I am sure that if you hire me, I will present you many successful projects with minimal efforts from your side.

                        I can give you money back guarantee and I can assure you won’t regret hiring me. </p>
                    </div>
                </Col>
            </div>
        </div>
        </>
    )
}
