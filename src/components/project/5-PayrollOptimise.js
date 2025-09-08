import React, {useState} from 'react';

function PayrollOptimise(props) {
    const [toggleState, setToggleState] = useState(0)
    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <div>
            <div className="projects__content">
                <div>
                    <i className="uil uil-calculator projects__icon"></i>
                    <h3 className="projects__title">Payroll Procedure Optimise</h3>
                </div>

                <span className="projects__button" onClick={() => toggleTab(5)}>
                        View details
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                <div className={toggleState === 5 ? 'projects__modal active-modal' : 'projects__modal'}>
                    <div className="projects__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                        <h3 className="projects__modal-title">Payroll Procedure Optimise</h3>
                        <p className="projects__modal-description">Automation tools to enhance payroll efficiency</p>

                        <ul className="projects__modal-projects grid">
                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">Role: Business analyst and developer</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">Overview: Analysed payroll data and developed three automation tools to enhance payroll efficiency, minimise manual effort, and ensure pay run consistency</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">Impact: Achieved a 60% reduction in manual work. Leveraged Accredo Script to automate workflows, minimising manual interventions and delays. Freed staff for higher-value tasks.</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">Tech Stack: Python | VBA</p>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default PayrollOptimise;