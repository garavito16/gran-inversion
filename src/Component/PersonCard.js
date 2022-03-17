
import React from "react";
import './PersonCard.css';

const PersonCard = (props) => {
    const {firstName,lastName,age,hairColor} = props.person;
    return(
        <div className="cuadrito">
            <h2>{firstName}, {lastName}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    );
}

export default PersonCard;