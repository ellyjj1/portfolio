import React from 'react'
import './skills.css'
import Frontend from './Frontend'
import Backend from './Backend'
import ProjectManager from './ProjectManager'
// import Consultant from './Consultant'
import BusinessAnalysis from './BusinessAnalysis'
import Tools from './Tools'
import AIEngineer from './AI'


const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical skill sets</span>

            <div className="skills__container container grid">
                <Frontend/>
                <Backend/>
                <AIEngineer />
                <ProjectManager/>
                <BusinessAnalysis/>
                
                {/* <Consultant/> */}
                <Tools/>
            </div>
        </section>
    )
}

export default Skills
