import React from "react";
import { TiArrowUpThick } from "react-icons/ti";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default () => {
    const [ height, setHeight ] = React.useState(0);

    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            setHeight(window.pageYOffset);
        })
        AOS.init({})
        return () => window.removeEventListener("scroll", () => {})
    })
    const scrollBackToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    };
    return (
        <button
            className={height > 100 ? "scroll-btn show-scroll-btn" : "scroll-btn"}
            onClick={scrollBackToTop}
            data-aos="fade-left"
            data-aos-delay="0"
        >
            <TiArrowUpThick></TiArrowUpThick>
        </button>
    );
};