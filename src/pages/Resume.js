import React from 'react'
import Background from '../components/Background'
import Footer from '../components/Footer'
import CV from '../components/Resume/CV'

export default function Resume() {
    return (
        <>
            <Background title="RESUME" />
            <div className="page">
                <CV />
                <Footer />
            </div>
        </>
    )
}
