import React from 'react'
import './skills.css'
import { skillsData } from './skillsData'
import SkillCard from './SkillCard'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Why both data and development? Yes, freelancers are superheroes</span>

      <div className="skills__container container grid">
        {skillsData.map(cat => (
          <SkillCard key={cat.id} title={cat.title} items={cat.items} />
        ))}
      </div>
    </section>
  )
}

export default Skills
