import React from "react";
import "./Card.css";

export default function Card(props) {
    return (
        <div className="card" id={props.city.id}>
            <h1>{props.city.location}</h1>
            <h2>{props.city.forecast}</h2>
        </div>
    )
}