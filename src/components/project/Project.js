import React, {useState} from 'react';
import './project.css';

const Project = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="projects section" id="projects">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Most recent programming work</span>
            <div className="projects__container container grid">
                <div className="projects__content">
                    <div>
                        <i className="uil uil-edit projects__icon"></i>
                        <h3 className="projects__title">My Portfolio</h3>
                    </div>
                    <span onClick={() => toggleTab(2)} className="projects__button">
                        View details
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                            <h3 className="projects__modal-title">My Portfolio</h3>
                            <p className="projects__modal-description">Introduce Myself to You.</p>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">This website develop to introduce myself.</p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">This project base on React and adapt to various screen sizes through responsive design.
                                         Using EmailJS SDK to collect contact information.</p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Version control with GitHub:<> </>

                                        <a href="https://github.com/ellyjj1/portfolio" target="_blank"
                                           rel="noopener noreferrer">
                                           GitHub link
                                        </a>
                                    </p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Deployed at Vercel:<> </>
                                        <a href="portfolio-self-three-40.vercel.app" target="_blank"
                                           rel="noopener noreferrer">
                                            Portfolio
                                        </a>
                                    </p>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="projects__content">
                    <div>
                        <i className="uil uil-web-grid projects__icon"></i>
                        <h3 className="projects__title">Writing Evaluator</h3>
                    </div>

                    <span className="projects__button" onClick={() => toggleTab(1)}>
                        View details
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                            <h3 className="projects__modal-title">Writing Evaluator</h3>
                            <p className="projects__modal-description">Evaluate your IELTS writing.</p>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">This project is designed to evaluate students’
                                        writing.</p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">provide feedback with OpenAI GPT API</p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">The frontend of this project
                                        use React. The backend part use Django. </p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Deployed at Vercel:
                                        <a href="https://ielts-evaluator-frontend.vercel.app" target="_blank"
                                           rel="noopener noreferrer">
                                            https://ielts-evaluator-frontend.vercel.app
                                        </a>
                                    </p>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="projects__content">
                    <div>
                        <i className="uil uil-arrow projects__icon"></i>
                        <h3 className="projects__title">MIS Web App</h3>
                    </div>
                    <span onClick={() => toggleTab(3)} className="projects__button">
                        View details
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                            <h3 className="projects__modal-title">MIS Web App</h3>
                            <p className="projects__modal-description">MIS Students Management Web Application.</p>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">This project was developed in the CI/CD
                                        course </p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">with Django and React.js.</p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">The application includes modules for managing
                                        programs, lecturer information, student information, student marks, and student
                                        attendance.</p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        GitHub link:
                                        <a href="https://github.com/ellyjj1/message_frontend" target="_blank"
                                           rel="noopener noreferrer">
                                            Frontend
                                        </a>
                                        <> and</>
                                        <a href="https://github.com/ellyjj1/message" target="_blank"
                                           rel="noopener noreferrer">
                                            Backend
                                        </a>
                                    </p>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>




            </div>
        </section>

    );
};

export default Project;