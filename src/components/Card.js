import React from "react";
import "./Card.css";

export default function Card(rops) {
    return (
        <div className="card">
            <form>
                <input type="text"></input>
                <button type="submit">Submit</button>
            </form>
            <div className="forecast">
                <p>The weather forecast for today is clear and sunny with a high of 86 degrees and a low of 65 degrees.</p>
            </div>
        </div>
    )
}