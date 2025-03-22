import React, {useState} from 'react';

function WritingEvaluation(props) {
        const [toggleState, setToggleState] = useState(0)

    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
    <div>
        <div className="projects__content">
            <div>
                <i className="uil uil-web-grid projects__icon"></i>
                <h3 className="projects__title">Writing Evaluator</h3>
            </div>

            <span className="projects__button" onClick={() => toggleTab(1)}>
                        View details
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

            <div className={toggleState === 1 ? 'projects__modal active-modal' : 'projects__modal'}>
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

    </div>
)
    ;
}

export default WritingEvaluation;