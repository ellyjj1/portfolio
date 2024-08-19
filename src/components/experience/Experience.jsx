import React from 'react';
import './experience.css';

const Experience = () => {

  return (
    <div>
       <section className="experience section" id="experience">
            <h2 className="section__title">Work Experience</h2>
            <span className="section__subtitle">What i did for years</span>
            <div className="experience__container container grid">
                <div className="experience__content">
                    <div className='experience__header'>
                        <i className="uil uil-code-branch experience__icon"></i>
                        <h3 className="experience__title">Independent Front-end Developer</h3>
                    </div>
                        <div className="experience__modal-content">
                            <p className="experience__modal-time">September 2023 - Now</p>
                            <ul className="experience__modal-experience grid">
                                <li className="experience__modal-project">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">Developed and deployed multiple web applications using React.js and Django, with a focus on responsive design and seamless API integration.</p>
                                </li>

                                <li className="experience__modal-project">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">Gained hands-on experience with CI/CD tools such as GitHub, CircleCI, and Vercel, enhancing expertise in front-end development, version control, and deployment automation.</p>
                                </li>

                                <li className="experience__modal-project">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">Contious deplopy the project on Vercel or AWS with Docker
                                    </p>
                                </li>

                            </ul>
                        </div>

                    {/* </div> */}
                </div>

                <div className="experience__content">
                    <div className='experience__header'>
                        <i className="uil uil-horizontal-align-left experience__icon"></i>
                        <h3 className="experience__title">Project Manager</h3>
                    </div>
                        <div className="experience__modal-content">
                            <p className="experience__modal-time">KYLINSOFT CORPORATION, January 2020-May 2024</p>
                            <ul className="experience__modal-experience grid">
                                <li className="experience__modal-project">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">As a project manager, I successfully led projects worth NZD 8 million in 2023, delivering on time and budget.</p>
                                </li>

                                <li className="experience__modal-project">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">I was responsible for managing end-to-end projects for enterprise clients. My role involved everything from pre-sale technical consulting to the completion of projects, often overseeing multiple high-stakes tasks simultaneously. To tackle these challenges, I coordinated multiple teams, got the support of all my leaders, and met strict deadlines.</p>
                                </li>

                                <li className="experience__modal-project">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">This experience reinforced my belief in the power of detailed planning, effective team coordination, and strong communication.</p>
                                </li>

                            </ul>
                        </div>
                </div>

                <div className="experience__content">
                    <div className='experience__header'>
                        <i className="uil uil-presentation-check experience__icon"></i>
                        <h3 className="experience__title">Pre-sales Consultant Manager</h3>
                    </div>
                        <div className="experience__modal-content">
                            <p className="experience__modal-time">BEIJING NATIONSKY NETWORK TECHNOLOGY, May 2016-January 2020</p>
                            <ul className="experience__modal-experience grid">
                                <li className="experience__modal-project">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">Leading a team of 7 and managing over 100 projects annually. My primary responsibilities include personnel coordination, support for key projects, client presentations, and managing bids and tenders.</p>
                                </li>

                                <li className="experience__modal-project">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">In a fiercely competitive market, I faced continuous challenges from clients and coworkers. I focused on building a cohesive team that could efficiently handle multiple tasks with Jira and adapt to dynamic situations. I leveraged my excellent understanding of customer needs and industry trends to drive our pre-sales activities. I also built a learning system with Confluence to ensure that every team member has the best work skills.</p>
                                </li>

                            </ul>
                        </div>
                </div>

                <div className="experience__content">
                    <div className='experience__header'>
                        <i className="uil uil-comment-alt-chart-lines experience__icon"></i>
                        <h3 className="experience__title">Pre-sales Consultant</h3>
                    </div>
                        <div className="experience__modal-content">
                            <p className="experience__modal-time">BEIJING SMARTDOT TECHNOLOGY, May 2007-April 2016</p>
                            <ul className="experience__modal-experience grid">
                                <li className="experience__modal-project">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">As a pre-sales consultant, I provided technical assistance and support to the sales team during the pre-sales phase, focusing on workflow systems, contract management systems, and CRM solutions, with a combined annual profit of NZD of 4.5 million.</p>
                                </li>

                                <li className="experience__modal-project">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">Demonstrated strong problem-solving skills to diagnose customer issues quickly and effectively.</p>
                                </li>

                            </ul>
                        </div>
                </div>

                <div className="experience__content">
                    <div className='experience__header'>
                        <i className="uil uil-code-branch experience__icon"></i>
                        <h3 className="experience__title">Developer</h3>
                    </div>
                        <div className="experience__modal-content">
                            <p className="experience__modal-time">CHINA RESOFT COMPUTER SYSTEM ENGINEERING, July 2005-May 2007</p>
                            <ul className="experience__modal-experience grid">
                                <li className="experience__modal-project">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">Responsible for developing, testing, and maintaining applications.</p>
                                </li>

                                <li className="experience__modal-project">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">Provided technical support for existing applications, troubleshooted issues, and implemented solutions.</p>
                                </li>

                            </ul>
                        </div>
                </div>


            </div>
       </section>
    </div>
  )
}

export default Experience
