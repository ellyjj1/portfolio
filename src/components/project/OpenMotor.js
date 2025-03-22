import React, {useState} from 'react';

function OpenMotor(props) {
    const [toggleState, setToggleState] = useState(0)
    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <div>
            <div className="projects__content">
                <div>
                    <i className="uil uil-car projects__icon"></i>
                    <h3 className="projects__title">Open Motor</h3>
                </div>

                <span className="projects__button" onClick={() => toggleTab(4)}>
                        View details
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                <div className={toggleState === 4 ? 'projects__modal active-modal' : 'projects__modal'}>
                    <div className="projects__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                        <h3 className="projects__modal-title">Open Motor</h3>
                        <p className="projects__modal-description">Car distribution platform</p>

                        <ul className="projects__modal-projects grid">
                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">Open Motor is a car distribution platform designed
                                    for car dealers and individual sellers. </p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">The platform is built with a React frontend and a
                                    Django backend.</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">Highlights: Google and Facebook Integration | OAuth
                                    2.0 | AWS | Docker | MUI | Generate invoice | Role-Based Access Control (RBAC)
                                </p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">
                                    Deployed on AWS EC2 and RDS.

                                </p>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default OpenMotor;