import React from 'react'
import { Col } from 'reactstrap'
import {AnimatedOnScroll} from "react-animated-css-onscroll";

export default function Page({reverse, title,description,image,align, dataalign}) {
    return (
        <>
            <div className="few-facts align-items-center">
                <div className={`d-flex justify-content-center flex-wrap flex-row-${reverse}`}>
                    <Col className="col-9 col-sm-7 col-md-4 col-lg-3 my-auto my-md-5 py-lg-5 mt-3">
                        <AnimatedOnScroll animationIn={`fadeInDown`}>
                        <span className="facts-title d-block d-md-none text-center my-3">{title}</span>
                        </AnimatedOnScroll>
                        <AnimatedOnScroll animationIn={`fadeIn${dataalign}`}>
                            <img src={image} className="img-fluid" alt="about me" />
                        </AnimatedOnScroll>
                    </Col>
                    <Col className="col-9 col-sm-7 col-md-5 col-lg-4 d-flex justify-content-center align-items-center my-auto">
                        <div>
                            <AnimatedOnScroll animationIn={`fadeIn${dataalign}`}>
                                <span className={`facts-title d-none d-md-block text-md-${align}`}>{title}</span>
                                <p className={`facts-paragraph mt-3 text-md-${align} text-left`}>{description}</p>
                            </AnimatedOnScroll>
                        </div>
                    </Col>
                </div>
            </div>
        </>
    )
}
