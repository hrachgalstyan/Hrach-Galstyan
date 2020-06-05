import React from 'react'
import { Animated } from "react-animated-css"

export default function Background({title, children, none}) {
    return (
        <div className="background" style={{zIndex: 0}}>
            <div className="bglayer">
                <div className="text-center">
                        <Animated animationIn="fadeInDown" animationInDuration={1500} isVisible={true}>
                            <div className="title">{title}</div>
                        </Animated>
                        <Animated animationIn="fadeInUp" animationInDuration={1500} isVisible={true}>
                        {children}
                        </Animated>
                </div>
                {none ? <div></div> : <div className="mouse"></div>}
            </div>
        </div>
    )
}
