import React from 'react'
import Background from '../components/Background'
import Footer from '../components/Footer'
import Send from '../components/Contact/Send'
import Map from '../components/Contact/Map'

export default function Contact() {
    return (
        <>
            <Background title="CONTACT" />
            <div className="page">
                <Send />
                <Map />
                <Footer />
            </div>
        </>
    )
}
