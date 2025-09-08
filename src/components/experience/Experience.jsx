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
                            <h3 className="experience__title">Freelance Web Developer</h3>
                        </div>
                        <div className="experience__modal-content">
                            <p className="experience__modal-time">December 2023 - Now</p>
                            <ul className="experience__modal-experience grid">
                                <li className="experience__modal-project">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">Independently sourced and secured SME clients by building trust through clear communication and delivering measurable value, earning referrals and long-term collaborations.</p>
                                </li>
                                <li className="experience__modal-project">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">Delivered 5+ tailored websites and internal systems (vehicle distribution, podiatry booking, timesheet portal) that improved user engagement by 35% and cut admin workload by 40% by analysing clients’ pain points and developing applications with React and Django.</p>
                                </li>
                                <li className="experience__modal-project">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">Reduced clients’ repetitive manual tasks by 80% by building AI-driven automation solutions or fine-tuning pretrained LLM (email-based quoting, invoice-to-QuickBooks sync, blueprint-to-quote generator) with n8n, LangChain, RAG, and AI agents.</p>
                                </li>
                                <li className="experience__modal-project">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">Enabled clients to secure investment and expand operations by providing end-to-end project delivery and long-term technical support.</p>
                                </li>

                                {/*<li className="experience__modal-project">*/}
                                {/*    <i className="uil uil-check-circle experience__modal-icon"></i>*/}
                                {/*    <p className="experience__modal-info">Contious deplopy the project on Vercel or AWS with Docker*/}
                                {/*    </p>*/}
                                {/*</li>*/}

                            </ul>
                        </div>

                        {/* </div> */}
                    </div>
                    <div className="experience__content">
                        <div className='experience__header'>
                            <i class="uil uil-chart-pie-alt experience__icon"></i>
                            <h3 className="experience__title">Business Analyst</h3>
                        </div>
                        <div className="experience__modal-content">
                            <p className="experience__modal-time">Brunton NZ Ltd, September 2024 - April 2025</p>
                            <ul className="experience__modal-experience grid">
                                <li className="experience__modal-project">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">Proactively took over the payroll process for two clients, identifying time-consuming work and system limitations. Cut payroll manual work time by 90% by creating three configurable VBA tools (Leave Rate Comparison, Leave Balance Tracker, Location-Based Request Filter), and training staff to adopt them.
                                    </p>
                                </li>
                                <li className="experience__modal-project">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">
                                    Reduced repetitive ERP work by 60% by designing Accredo Scripts that automated data handling and streamlined production workflows. </p>
                                </li>

                            </ul>
                        </div>

                        {/* </div> */}
                    </div>



                    <div className="experience__content">
                        <div className='experience__header'>
                            <i className="uil uil-horizontal-align-left experience__icon"></i>
                            <h3 className="experience__title">Partner | Project Manager</h3>
                        </div>
                        <div className="experience__modal-content">
                            <p className="experience__modal-time">KYLINSOFT CORPORATION, January 2020-May 2024</p>
                            <ul className="experience__modal-experience grid">
                                <li className="experience__modal-project">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">KylinSoft is China’s Red Hat. Led digital transformation and information security programs for 12 SOEs (including 5 Fortune 500), impacting over 50,000 end users.</p>
                                </li>

                                <li className="experience__modal-project">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">Facilitated 200+ requirements workshops, delivered 100+ presentations, and prepared 60+ bidding proposals over 4 years for contracts worth over 15 million NZD, mapped business processes, advised on technology selection, and supervised development, testing, deployment, and user training. </p>
                                </li>

                                <li className="experience__modal-project">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">Achieved over 95% user adoption through multi-phase rollouts and close vendor-R&D collaboration that overcame business-system-to-OS compatibility issues.</p>
                                </li>
                                <li className="experience__modal-project">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">Led a team of 3 PMs and coordinated matrix resources via daily stand-ups, clearing bottlenecks and aligning stakeholders, suppliers, and developers.</p>
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
                            <p className="experience__modal-time">BEIJING NATIONSKY NETWORK TECHNOLOGY, May 2016-January
                                2020</p>
                            <ul className="experience__modal-experience grid">
                                <li className="experience__modal-project">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">Led agile teams of 7 using Scrum methodology, conducting daily stand-ups and sprint planning to ensure timely delivery of client solutions, managing over 100 UEM (Unified Endpoint Management system) projects annually.</p>
                                </li>

                                <li className="experience__modal-project">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">Managed personnel coordination, key project support, client presentations, and bids, leveraging a deep understanding of customer needs and industry trends to drive pre-sales activities.</p>
                                </li>

                                <li className="experience__modal-project">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">
                                    Focused on building a cohesive team by implementing Jira for efficient task management and Confluence for continuous skill development, ensuring adaptability in dynamic situations.                                        </p>
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
                                    <p className="experience__modal-info">Provided technical support to the sales team, responsible for achieving an annual profit of NZD 4.5 million.</p>
                                </li>

                                <li className="experience__modal-project">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">Focused on workflow systems, contract management systems, and CRM solutions.</p>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div className="experience__content">
                        <div className='experience__header'>
                            <i className="uil uil-code-branch experience__icon"></i>
                            <h3 className="experience__title">Full Stack Developer</h3>
                        </div>
                        <div className="experience__modal-content">
                            <p className="experience__modal-time">CHINA RESOFT COMPUTER SYSTEM ENGINEERING, July
                                2005-May
                                2007</p>
                            <ul className="experience__modal-experience grid">
                                <li className="experience__modal-project">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">Responsible for developing, testing, and
                                        maintaining applications.</p>
                                </li>

                                <li className="experience__modal-project">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">Provided technical support for existing
                                        applications, troubleshooted issues, and implemented solutions.</p>
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
