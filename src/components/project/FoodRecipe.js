import React, {useState} from 'react'

const FoodRecipe = () => {
    const [toggleState, setToggleState] = useState(0)

    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <div>
            <div className="projects__content">
                <div>
                    <i className="uil uil-restaurant projects__icon"></i>
                    <h3 className="projects__title">Food Recipe</h3>
                </div>
                <span onClick={() => toggleTab(3)} className="projects__button">
                        View details
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                <div className={toggleState === 3 ? 'projects__modal active-modal' : 'projects__modal'}>
                    <div className="projects__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                        <h3 className="projects__modal-title">Food Recipe</h3>
                        <p className="projects__modal-description">A frontend application of food recipe based on
                            Forkify API</p>

                        <ul className="projects__modal-projects grid">
                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">Using React.js, Tailwind CSS, and React
                                    Router </p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">Using the Context API to manage global state,
                                    such as search
                                    parameters, recipe lists, recipe details, and the favorites list, ensuring
                                    consistency across
                                    different pages.</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">Tailwind CSS is used to create a responsive
                                    layout, ensuring the
                                    application looks good on various devices.</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">
                                    <a href="https://github.com/ellyjj1/Food_recipe" target="_blank"
                                       rel="noopener noreferrer">
                                        GitHub link
                                    </a>
                                    <> </>
                                    <span>and</span>
                                    <> </>
                                    <a href="https://food-recipe-eight-zeta.vercel.app/" target="_blank"
                                       rel="noopener noreferrer">
                                        Vercel link
                                    </a>


                                </p>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FoodRecipe;
