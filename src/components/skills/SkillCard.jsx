import React from 'react'

const SkillCard = ({ title, items }) => {
  const mid = Math.ceil(items.length / 2)
  const groups = [items.slice(0, mid), items.slice(mid)]

  return (
    <div className="skills__content">
      <h3 className="skills__title">{title}</h3>
      <div className="skills__box">
        {groups.map((group, gi) => (
          <div key={gi} className="skills__group">
            {group.map((name, i) => (
              <div key={i} className="skills__data">
                <i className="bx bxs-badge-check"></i>
                <div>
                  <h3 className={name.length > 14 ? 'skills__name__small' : 'skills__name'}>
                    {name}
                  </h3>
                  <span className="skills__level"> </span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillCard
