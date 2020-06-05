import React from 'react'
import CVImage from './CV.png'

export default function CV() {
    return (
        <>
            <div className="d-flex justify-content-center w-100 flex-wrap">
                {/* <div className="cv-button m-4">
                    <span>Download</span>
                </div>
                <div className="cv-button m-4">
                    <span>Print</span>
                </div> */}
            </div>
            <img src={CVImage} alt='cv' className="img-fluid p-5 mb-4 mx-auto w-100" />
        </>
    )
}
