import React from "react";
import pic from "../../assets/homePic.png";
import mealBox from "../../assets/mealBox.png";
import '../BodyMain/BodyMain.css';

const meals = [
    { id: 1, name: 'MEAL#1', price: 150 },
    { id: 2, name: 'MEAL#2', price: 200 },
    { id: 3, name: 'MEAL#3', price: 250 },
    { id: 4, name: 'MEAL#4', price: 300 },
    { id: 5, name: 'MEAL#5', price: 150 },
    { id: 6, name: 'MEAL#6', price: 200 },
    { id: 7, name: 'MEAL#7', price: 250 },
    { id: 8, name: 'MEAL#8', price: 300 }
];

const BodyMain = () => {
    return (
        <div id="mainBody">
            <div id="bgPic"><img id="bgPicImg" src={pic} alt="" /></div>
            <div id="mealBoxHeading">MEAL BOX</div>
            <div id="meals">
                {meals.map((meal) => (
                    <div className="meal" id={`meal-${meal.id}`} key={`meal-${meal.id}`}>
                        <img id="mealBoxPic" src={mealBox} alt="" />
                        <div id="mealName">{meal.name}</div>
                        <select id="dropDownMeal">
                            <option value="option1">SMALL</option>
                            <option value="option2">MEDIUM</option>
                            <option value="option3">LARGE</option>
                        </select>
                        <div id="pricing">
                            <div id="price">{meal.price}</div>
                            <button id="addToCart">+</button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};
export default BodyMain;
