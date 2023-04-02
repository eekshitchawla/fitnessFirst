import React, { useState } from "react";
import "../BMI/BMI.css";
const BMI = () => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState("");
    const [bmiRange, setBmiRange] = useState("");

    const calculateBMI = () => {
        const weightInKg = Number(weight);
        const heightInMeters = Number(height) / 100;
        const bmiValue = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
        setBmi(bmiValue);
        setBmiRange(getBmiRange(bmiValue))
    };

    const getBmiRange = (bmiValue) => {
        if (bmiValue < 18.5) {
            return "Underweight (Unfit)";
        } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
            return "Normal weight (Fit)";
        } else if (bmiValue >= 25 && bmiValue <= 29.9) {
            return "Overweight (Unfit)";
        } else {
            return "Obesity (Unfit)";
        }
    };

    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };

    const handleHeightChange = (event) => {
        setHeight(event.target.value);
    };

    return (
        <div id="bmiPage">
            <div className="card">
                <h1>BMI Calculator</h1>
                <div id="weightSection">
                    <label id="text">Weight (kg)</label>
                    <input
                        type="number"
                        id="weight"
                        value={weight}
                        onChange={handleWeightChange}
                    />
                </div>
                <div id="heightSection">
                    <label id="text">Height (cm)</label>
                    <input
                        type="number"
                        id="height"
                        value={height}
                        onChange={handleHeightChange}
                    />
                </div>
                <button type="button" id="btnCalc" onClick={calculateBMI}>
                    Calculate BMI
                </button>
                {bmi && (
                    <div id="text">Your BMI is {bmi}, which is in the range of <strong>{bmiRange}</strong>.</div>
                )}
            </div>
        </div>
    );
};

export default BMI;
