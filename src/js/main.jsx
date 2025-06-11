import React, { useState } from "react";
import "./TrafficLight.css";

const TrafficLight = () => {
    const [selectedColor, setSelectedColor] = useState("red");

    return (
        <div className="traffic-light">
            <div
                className={`light red ${selectedColor === "red" ? "selected" : ""}`}
                onClick={() => setSelectedColor("red")}
            ></div>
            <div
                className={`light yellow ${selectedColor === "yellow" ? "selected" : ""}`}
                onClick={() => setSelectedColor("yellow")}
            ></div>
            <div
                className={`light green ${selectedColor === "green" ? "selected" : ""}`}
                onClick={() => setSelectedColor("green")}
            ></div>
        </div>
    );
};

export default TrafficLight;
