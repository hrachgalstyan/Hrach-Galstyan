import React from 'react'
import Background from '../components/Background'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <Background title="DEVELOPER" none>
                <Link to="/contact" className="home-button">CONTACT</Link>
                <Link to="/resume" className="home-button">RESUME</Link>
            </Background>
        </>
    )
}
