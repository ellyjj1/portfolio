import React from 'react'

const Social = () => {
  return (
    <div className="home__social">
        <a 
            href="https://github.com/ellyjj1" 
            className="home__social-icon" 
            target='_blank'
            rel="noopener noreferrer"
            >
            <i className="uil uil-github"></i>
        </a>

        <a 
            href="https://www.linkedin.com/in/jingjing-yu-514620301/"
            className="home__social-icon" 
            target='_blank'
            rel="noopener noreferrer">
            <i class="uil uil-linkedin"></i>
        </a>


        {/*<a */}
        {/*    href="https://ielts-evaluator-frontend.vercel.app/" */}
        {/*    className="home__social-icon" */}
        {/*    target='_blank'*/}
        {/*    rel="noopener noreferrer">*/}
        {/*    <i class="uil uil-monitor"></i>*/}
        {/*</a>*/}

    </div>
  )
}

export default Social
