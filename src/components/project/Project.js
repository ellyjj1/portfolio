import React from 'react'
import './project.css'
// import MyPortfolio from "./2-MyPortfolio";
// import FoodRecipe from "./3-FoodRecipe";
// import ExpenseTracker from "./4-ExpenseTracker";
// import WritingEvaluation from "./1-WritingEvaluation";
// import UnderConstruction from "./UnderConstruction";
import MotorDistribution from "./8-MotorDistribution";
import LoveYourFeet from "./7-LoveYourFeet";
import PayrollOptimise from "./5-PayrollOptimise";
import AIBasedAutomation   from "./6-AIBasedAutomation"
import FineTunedEvaluation  from "./9-FineTunedEvaluation"
import AIAgentVirtualTeam   from "./1-AIAgentVirtualTeam"

const Project = () => {

    return (
        <section className="projects section" id="projects">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Real problems, real solutions</span>
            <div className="projects__container container grid">
                <AIBasedAutomation />
                <FineTunedEvaluation />
                <AIAgentVirtualTeam />

                <MotorDistribution/>
                <PayrollOptimise/>
                <LoveYourFeet/>

                {/* <MyPortfolio/> */}
                {/* <FoodRecipe/> */}
                {/* <ExpenseTracker/> */}
                {/* <WritingEvaluation/> */}
                {/*<UnderConstruction/>*/}
            </div>
        </section>

    )
}

export default Project