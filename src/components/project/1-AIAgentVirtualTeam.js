import React, {useState} from 'react';

function AIAgentVirtualTeam(props) {
    const [toggleState, setToggleState] = useState(0)
    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <div>
            <div className="projects__content">
                <div>
                    <i className="uil uil-users-alt projects__icon"></i>
                    <h3 className="projects__title">
                        <p>AI Agent</p>
                        <p>Virtual Teams</p>
                    </h3>

                </div>

                <span className="projects__button" onClick={() => toggleTab(1)}>
                        View details
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                <div className={toggleState === 1 ? 'projects__modal active-modal' : 'projects__modal'}>
                    <div className="projects__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                        <h3 className="projects__modal-title">AI Agent Virtual Teams</h3>
                        <p className="projects__modal-description">IDEA to Code Automation Pipeline</p>

                        <ul className="projects__modal-projects grid">
                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">Role: Project coordinator, prompt engineer, and Front-end developer</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">Overview: Built a coordinator + three specialised agents (Product, Design, Frontend) with file-based handoffs. From PRD.md → DESIGN_SPEC.md → React/TS code, to turn product ideas into running UIs in a single conversation.</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">Impact: Standardised artefacts and structured prompts reduced handoff friction and rework, enforced accessibility & design-token discipline, and cut time-to-first-prototype from days to hours.</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">Tech Stack: Claude Code | Prompt Orchestration | React + TypeScript | Tailwind | Vite</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">
                                GitHub link: <> </>
                                <a href="https://github.com/ellyjj1/AI-Agent-Teams" target="_blank"
                                   rel="noopener noreferrer">
                                    AI Agent Teams
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

export default AIAgentVirtualTeam;