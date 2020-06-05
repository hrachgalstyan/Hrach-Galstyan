import React, { useEffect } from 'react'
import Background from '../components/Background'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
    useEffect(() => {
        AOS.init({})
    }, [])
    return (
        <>
            <Background title="DEVELOPER" none>
                <div className="d-flex justify-content-center">
                    <Link to="/contact" data-aos="fade-up-right" className="home-button">CONTACT</Link>
                    <Link to="/resume" data-aos="fade-up-left" className="home-button">RESUME</Link>
                </div>
            </Background>
        </>
    )
}
