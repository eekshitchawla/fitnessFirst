import React from "react";
import '../Recipes/Recipes.css';
import { useState } from "react";

function Card(props) {
    const [isFlipped, setIsFlipped] = useState(false);

    function handleClick() {
        setIsFlipped(!isFlipped);
    }

    return (
        <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={handleClick}>
            <div className="card-front">
                <h2>{props.title}</h2>
                <img id="img" src={props.description} alt="" srcset="" />
            </div>
            <div className="card-back">
                <h2>{props.title}</h2>
                <p>{props.backContent}</p>
            </div>
        </div>
    );
}
const Recipes = () => {
    return (
        <div id="recipesPage">
            <Card
                title="PROTEIN POWDER"
                description="https://img.freepik.com/free-vector/protein-shake-illustration_23-2150030623.jpg?size=626&ext=jpg&ga=GA1.2.479789805.1680506948&semt=ais"
                backContent="1 tbsp Powder, 2 tbsp Water, Mix"
            />
            <Card
                title="PROTEIN POWDER"
                description="https://img.freepik.com/free-vector/protein-shake-illustration_23-2150030623.jpg?size=626&ext=jpg&ga=GA1.2.479789805.1680506948&semt=ais"
                backContent="1 tbsp Powder, 2 tbsp Water, Mix"
            />
        </div>
    );
}

export default Recipes;