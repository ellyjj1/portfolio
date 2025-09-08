import React, {useState} from 'react';

function ExpenseTracker(props) {
    const [toggleState, setToggleState] = useState(0)

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <div>
            <div className="projects__content">
                <div>
                    <i className="uil uil-usd-circle projects__icon"></i>
                    <h3 className="projects__title">Expense Tracker</h3>
                </div>

                <span className="projects__button" onClick={() => toggleTab(4)}>
                        View details
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                <div className={toggleState === 4 ? 'projects__modal active-modal' : 'projects__modal'}>
                    <div className="projects__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                        <h3 className="projects__modal-title">Expense Tracker</h3>
                        <p className="projects__modal-description">Personal accounting software</p>

                        <ul className="projects__modal-projects grid">
                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">A full-stack personal accounting software built
                                    with React, Django, and PostgreSQL.</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">uses React's Context API for global state
                                    management, Chakra UI and ApexCharts are used for consistent and customizable
                                    styling</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">Django used for building the backend REST API,
                                    PostgreSQL deploy on neon.</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">
                                    Deployed on <> </>
                                    <a href="https://expense-tracker-alpha-beige.vercel.app/" target="_blank"
                                       rel="noopener noreferrer">
                                        Vercel
                                    </a>
                                    <> </>
                                    and GitHub links: <> </>
                                    <a href="https://github.com/ellyjj1/Expense_tracker" target="_blank"
                                       rel="noopener noreferrer">
                                        frontend
                                    </a>
                                    <> </>
                                    , <> </>
                                    <a href="https://github.com/ellyjj1/Expense_tracker_backend" target="_blank"
                                       rel="noopener noreferrer">
                                        backend
                                    </a>
                                </p>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default ExpenseTracker;