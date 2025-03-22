import React from 'react'
import './project.css'
import MyPortfolio from "./MyPortfolio";
import FoodRecipe from "./FoodRecipe";
import ExpenseTracker from "./ExpenseTracker";
import WritingEvaluation from "./WritingEvaluation";
// import UnderConstruction from "./UnderConstruction";
import OpenMotor from "./OpenMotor";
import LoveYourFeet from "./LoveYourFeet";

const Project = () => {

    return (
        <section className="projects section" id="projects">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Most recent programming work</span>
            <div className="projects__container container grid">
                <OpenMotor/>
                <LoveYourFeet/>
                <MyPortfolio/>
                <FoodRecipe/>
                <ExpenseTracker/>
                <WritingEvaluation/>
                {/*<UnderConstruction/>*/}
            </div>
        </section>

    )
}

export default Project