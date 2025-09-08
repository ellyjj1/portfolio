import React, {useState} from 'react';

function AIBasedAutomation(props) {
    const [toggleState, setToggleState] = useState(0)
    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <div>
            <div className="projects__content">
                <div>
                    <i className="uil uil-robot projects__icon"></i>
                    <h3 className="projects__title">AI Automation & Workflow Orchestration</h3>
                </div>

                <span className="projects__button" onClick={() => toggleTab(6)}>
                        View details
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                <div className={toggleState === 6 ? 'projects__modal active-modal' : 'projects__modal'}>
                    <div className="projects__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                        <h3 className="projects__modal-title">AI Automation & Workflow Orchestration</h3>
                        <p className="projects__modal-description">Intelligent automation systems with AI integration</p>

                        <ul className="projects__modal-projects grid">
                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">Role: Business analyst and developer</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">Overview: Built intelligent, end-to-end automation systems using n8n to integrate AI agents (OpenAI), web crawlers, APIs (Google, Facebook, Telegram, WhatsApp, Serpapi, and Jina), and dynamic workflows for content extraction, summarisation, and communication across multiple platforms.</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">Tech Stack: n8n | OpenAI Chat API | Firecrawl | Google Calendar, Gmail and Drive Integration | Telegram Bot | API Polling & Webhooks | JSON Schema Prompts | Audio Generation (TTS) | Dynamic Cron Workflows | Error-Handled Loops</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">Projects: Cosmetics company inventory management based on email analysis, Google Drive invoice recognition and QuickBooks upload, architectural design drawing recognition for quote generation, website customer service, news scraping converted to audio, IELTS essay image OCR recognition converted to JSON</p>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default AIBasedAutomation;