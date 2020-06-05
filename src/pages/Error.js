import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <>
        <div className="background" style={{zIndex: 0}}>
            <div className="bglayer">
                <div className="text-center">
                    <div className="title font-weight-light">404</div>
                    <h3 className="pb-3" style={{color: 'white'}}>not found</h3>
                    <Link to='/' className="button mx-auto header-link">Return</Link>
                </div>
            </div>
        </div>
        </>
    )
}
