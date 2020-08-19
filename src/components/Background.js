import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Background({title, children, none}) {
    useEffect(() => {
        AOS.init({})
    }, [])
    return (
        <div className="background" style={{zIndex: 0}}>
            <div className="bglayer">
                <div className="text-center">
                    <div data-aos="fade-down" className="title">{title}</div>
                    {children}
                </div>
                {none ? <div></div> : 
                    <div className="d-flex justify-content-center mouse-bg">
                        <div className="mouse"></div>
                    </div>
                }
            </div>
        </div>
    )
}
