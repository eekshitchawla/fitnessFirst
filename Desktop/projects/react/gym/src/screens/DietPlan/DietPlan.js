import React from "react";
import '../DietPlan/DietPlan.css';
import consultPic from "../../assets/consult.png";
import naturePic from "../../assets/nature.png";
import sciencePic from "../../assets/science.png";

const DietPlan = () => {
    return (
        <div id="dietPlan">
            <div id="container">
                <h2>THE COMPLETE CARE PACKAGE</h2>
                <div id="features">
                    <span id="feature">
                        <img id="image" src={consultPic} alt="" srcset="" />
                        <div id="txt">Expert Consultation</div>
                    </span>
                    <span id="feature">
                        <img id="image" src={sciencePic} alt="" srcset="" />
                        <div className="txt">Science-backed Diet Chart</div>
                    </span>
                    <span id="feature">
                        <img id="image" src={naturePic} alt="" srcset="" />
                        <div id="txt">Natural and effective Mucle Growth</div>
                    </span>
                </div>
                <span>

                    <button id="btn">COSTS LOWER THAN YOUR PIZZA! ONLY 399/-</button>
                </span>
            </div>
        </div>
    );
}

export default DietPlan;
