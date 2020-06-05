import React from 'react'
import Background from '../components/Background'
import Footer from '../components/Footer'
import Page from '../components/Portfolio/Page'
import data from '../components/Portfolio/data'

export default function Portfolio() {
    return (
        <>
            <Background title='PORTFOLIO' />
            <div className="page">
                {data.map(item => {
                    return <Page key={item.id} title={item.title} image={item.image} description={item.description} reverse={item.reverse} align={item.align} dataalign={item.dataalign} />
                })}
                <Footer />
            </div>
        </>
    )
}
