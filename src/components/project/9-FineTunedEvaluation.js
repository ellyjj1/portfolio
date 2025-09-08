import React, {useState} from 'react';

function FineTunedEvaluation(props) {
    const [toggleState, setToggleState] = useState(0)
    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <div>
            <div className="projects__content">
                <div>
                    <i className="uil uil-graduation-cap projects__icon"></i>
                    <h3 className="projects__title">Fine-Tuned AI-Based Evaluation System</h3>
                </div>

                <span className="projects__button" onClick={() => toggleTab(9)}>
                        View details
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                <div className={toggleState === 9 ? 'projects__modal active-modal' : 'projects__modal'}>
                    <div className="projects__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                        <h3 className="projects__modal-title">Fine-Tuned AI-Based IELTS Writing Evaluation System</h3>
                        <p className="projects__modal-description">AI-powered writing assessment with fine-tuned models</p>

                        <ul className="projects__modal-projects grid">
                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">Role: Researcher, project coordinator and full-stack developer</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">Overview: The system integrates retrieval-augmented generation (RAG) and vector database, with fine-tuning of the LLM, to achieve consistency and accuracy in AI-generated scores compared to official examiners, reducing the score gaps.</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">Impact: Using ChatGPT Supervised Fine-Tuning (SFT) re-trained gpt-4.1 with a final training loss of 0.782, addressing the AI writing evaluation "regression to the mean" problem.</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">Tech Stack: OpenAI Assistant | RAG | Fine-tuning | LangChain | Chroma | n8n | React | Django | REST API | Token-based Auth | GitHub Actions | Vercel</p>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default FineTunedEvaluation;