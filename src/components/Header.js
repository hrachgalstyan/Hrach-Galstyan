import React, { useState, useEffect } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav} from 'reactstrap';
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.svg'
import { RiMenu3Line } from "react-icons/ri";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
        back()
    }
    function back(){
        const navbar = document.getElementById('navbar').style;
        if (!isOpen){
            navbar.background = 'rgba(0, 0, 0, 1)';
        }
        else{
            setTimeout(() => {navbar.background = 'transparent'}, 300);
        }
    }
    const toggleNav = () => setIsOpen(false);

    useEffect(() => {
        AOS.init({})
    }, [])
    return (
        <div>
            <Navbar className="d-flex align-items-center" id='navbar' expand="lg" light style={{zIndex: '100'}}>
                <Link to='/' className="ml-sm-5 ml-3 d-flex align-items-center" style={{textDecoration: "none"}} onClick={toggleNav}>
                    <img data-aos="fade-right" src={Logo} alt="Hrach" />
                    <div data-aos="fade-down" className="px-2 header-link" style={{fontSize: '22px'}}>Hrach Galstyan</div>
                </Link>
                <NavbarToggler onClick={toggle} className="mr-sm-5 mr-3 toggler"><RiMenu3Line data-aos="fade-left" style={{color: 'var(--mainWhite)', fontSize: '32px'}} /></NavbarToggler>
                <Collapse isOpen={isOpen} navbar className="text-center mr-lg-5">
                    <Nav className="ml-lg-auto ml-0" id="nav" navbar>
                        <Link to='/' data-aos="fade-left" className="d-flex align-items-center px-3 py-3 py-lg-0 header-link mx-auto" onClick={toggleNav} >
                            HOME
                        </Link>
                        <Link to='/about' data-aos="fade-left" data-aos-delay="100" className="d-flex align-items-center px-3 py-3 py-lg-0 header-link mx-auto" onClick={toggleNav} >
                            ABOUT
                        </Link>
                        <Link to='/portfolio' data-aos="fade-left" data-aos-delay="200" className="d-flex align-items-center px-3 py-3 py-lg-0 header-link mx-auto" onClick={toggleNav} >
                            PORTFOLIO
                        </Link>
                        <Link to='/resume' data-aos="fade-left" data-aos-delay="300" className="d-flex align-items-center px-3 py-3 py-lg-0 header-link mx-auto" onClick={toggleNav} >
                            RESUME
                        </Link>
                        {/* <Link to='/shop' className="d-flex align-items-center px-3 py-3 py-lg-0 header-link mx-auto" onClick={toggleNav} >
                            SHOP
                        </Link> */}
                        <Link to='/contact' data-aos="fade-left" data-aos-delay="400" className="d-lg-flex d-none align-items-center px-3 py-3 py-lg-0 header-link mx-auto button mb-lg-0 mb-2" onClick={toggleNav} >
                            CONTACT
                        </Link>
                        <Link to='/contact' data-aos="fade-left" data-aos-delay="500" className="d-flex d-lg-none align-items-center px-3 py-3 py-lg-0 header-link mx-auto" onClick={toggleNav} >
                            CONTACT
                        </Link>
                        <div className="d-flex justify-content-center align-items-center d-lg-none header-link">
                            <div className="social-links d-flex justify-content-center mx-auto w-75 py-3">
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
                        </div>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}
