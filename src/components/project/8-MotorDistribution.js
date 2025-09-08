import React, {useState} from 'react';

function MotorDistribution(props) {
    const [toggleState, setToggleState] = useState(0)
    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <div>
            <div className="projects__content">
                <div>
                    <i className="uil uil-car projects__icon"></i>
                    <h3 className="projects__title">Motor Distribution System</h3>
                </div>

                <span className="projects__button" onClick={() => toggleTab(8)}>
                        View details
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                <div className={toggleState === 8 ? 'projects__modal active-modal' : 'projects__modal'}>
                    <div className="projects__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                        <h3 className="projects__modal-title">A Motor Distribution site</h3>
                        <p className="projects__modal-description">Support individuals and car dealers</p>

                        <ul className="projects__modal-projects grid">
                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">My Role: Business analyst, project coordinator and full-stack developer to collect and confirm the requirements, scoping and development.  </p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">Overview: This is a car distribution platform designed for car dealers and individual sellers, with a React front-end and a Django backend. Implemented AWS services for Motor sales platform deployment, including EC2, S3, Amp and Lambda. Utilised GitHub Actions and AWS for CI/CD pipeline automation, reducing deployment time by 80%</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">Impact: Integrating Google and Facebook sign-in via OAuth 2.0 increased user registrations by about 40%. Meanwhile, adding 10 service choices per vehicle and automating calculations for reserve price, benefit, and quotes streamlined dealer workflows, boosting listing efficiency by over 35%.
                                </p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">
                                Tech Stack: React | Django | Google and Facebook Integration | OAuth 2.0 | AWS | Docker | MUI | Generate invoice | Role-Based Access Control (RBAC)
                                </p>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default MotorDistribution;