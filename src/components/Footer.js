import React from 'react'
import { Nav } from 'reactstrap'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <Nav className="d-flex justify-content-center flex-column footer mt-md-0 p-4 w-100">
            <span className="footer-title text-center mt-5 mb-4">Let me build the website you need</span>
            <div className="d-flex justify-content-center flex-wrap w-75 mx-auto">
                <Link to='/' className="d-flex align-items-center px-4 py-3 py-lg-0 header-link">
                    HOME
                </Link>
                <Link to='/about' className="d-flex align-items-center px-4 py-3 py-lg-0 header-link">
                    ABOUT
                </Link>
                <Link to='/portfolio' className="d-flex align-items-center px-4 py-3 py-lg-0 header-link">
                    PORTFOLIO
                </Link>
                <Link to='/resume' className="d-flex align-items-center px-4 py-3 py-lg-0 header-link">
                    RESUME
                </Link>
                <Link to='/contact' className="d-flex align-items-center px-4 py-3 py-lg-0 header-link">
                    CONTACT
                </Link>
            </div>
            <div className="social-links d-flex justify-content-center mx-auto w-75 my-md-5 my-3">
                <a href="https://www.instagram.com/hrachgalstyan_/" className="social mx-2 d-flex justify-content-center align-items-center">
                    <i className="fa fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com/hrach002" className="social mx-2 d-flex justify-content-center align-items-center">
                    <i className="fa fa-facebook"></i>
                </a>
                <a href="https://www.linkedin.com/in/hrach-galstyan-9934b5171/" className="social mx-2 d-flex justify-content-center align-items-center">
                    <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://github.com/hrachgalstyan" className="social mx-2 d-flex justify-content-center align-items-center">
                    <i className="fa fa-github"></i>
                </a>
            </div>
        </Nav>
    )
}
