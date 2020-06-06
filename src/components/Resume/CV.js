import React from 'react'
import CVImage from './CV.png'
import printJS from 'print-js'

export default function CV() {
    return (
        <>
            <div className="d-flex justify-content-center w-100 flex-wrap">
                {/* <div className="cv-button m-4"> */}
                    <a href={CVImage} download="CV" className="cv-button m-4">
                        <span>Download</span>
                    </a>
                {/* </div> */}
                <div className="cv-button m-4" onClick={() => window.print()}>
                    <span>Print</span>
                </div>
            </div>
            <img src={CVImage} alt='cv' className="img-fluid px-5 pb-5 pt-0 mb-4 mx-auto w-100 print-container" />
        </>
    )
}
