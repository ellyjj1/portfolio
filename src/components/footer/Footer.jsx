import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Jingjing</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#projects" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                </ul>

                <ul className="footer__social">
                    <a
                        href="https://github.com/ellyjj1"
                        className="home__social-icon"
                        target='_blank'
                        rel="noopener noreferrer"
                    >
                        <i className="uil uil-github"></i>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/jingjing-yu-514620301/"
                        className="home__social-icon"
                        target='_blank'
                        rel="noopener noreferrer">
                        <i className="uil uil-linkedin"></i>
                    </a>


                    <a
                        href="https://ielts-evaluator-frontend.vercel.app/"
                        className="home__social-icon"
                        target='_blank'
                        rel="noopener noreferrer">
                        <i className="uil uil-monitor"></i>
                    </a>
                </ul>
            </div>
        </footer>
    )
};
export default Footer;