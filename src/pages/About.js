import React from 'react'
import Background from '../components/Background'
import Facts from '../components/About/Facts'
import Footer from '../components/Footer'

export default function About() {
    return (
        <>
            <Background title="ABOUT" />
            <div className="page">
                <Facts />
                <Footer />
            </div>
        </>
    )
}
