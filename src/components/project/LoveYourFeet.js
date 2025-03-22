import React, {useState} from 'react';

function LoveYourFeet(props) {
        const [toggleState, setToggleState] = useState(0)

    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
    <div>
        <div className="projects__content">
            <div>
                <i className="uil uil-medkit projects__icon"></i>
                <h3 className="projects__title">Love your Feet</h3>
            </div>

            <span className="projects__button" onClick={() => toggleTab(1)}>
                        View details
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

            <div className={toggleState === 1 ? 'projects__modal active-modal' : 'projects__modal'}>
                <div className="projects__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                    <h3 className="projects__modal-title">Love your Feet</h3>
                    <p className="projects__modal-description">A system for a podiatry clinic</p>

                    <ul className="projects__modal-projects grid">
                        <li className="projects__modal-project">
                            <i className="uil uil-check-circle projects__modal-icon"></i>
                            <p className="projects__modal-info">System shows services and open hours of the podiatry clinic</p>
                        </li>

                        <li className="projects__modal-project">
                            <i className="uil uil-check-circle projects__modal-icon"></i>
                            <p className="projects__modal-info">integrated with Google Calendar API to manage real-time schedules and availability.</p>
                        </li>

                        <li className="projects__modal-project">
                            <i className="uil uil-check-circle projects__modal-icon"></i>
                            <p className="projects__modal-info">Highlights: Google Calendar API | OAuth 2.0 | FullCalendar | Bootstrap | Responsive design  </p>
                        </li>

                        <li className="projects__modal-project">
                            <i className="uil uil-check-circle projects__modal-icon"></i>
                            <p className="projects__modal-info">
                                Website link: <> </>
                                <a href="https://loveyourfeet.co.nz/" target="_blank"
                                   rel="noopener noreferrer">
                                    Love Your Feet
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

export default LoveYourFeet;