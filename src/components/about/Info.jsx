import React from 'react'

const Info = () => {
  return (

    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bx-code-alt'></i>
            <h3 className="about__title">Front-end Developer</h3>
            <span className="about__subtitle">1 Year</span>
        </div>

        <div className="about__box">
        <i class='bx bx-objects-horizontal-left'></i>
            <h3 className="about__title">Project Manager</h3>
            <span className="about__subtitle">4 Years</span>
        </div>

        <div className="about__box">
        <i class='bx bx-chat' ></i>
            <h3 className="about__title">Pre-Sale Consultant</h3>
            <span className="about__subtitle">10+ Years</span>
        </div>

    </div>

  )
}

export default Info
