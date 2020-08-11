import React, { useState } from "react";

const StateComponent = () => {
    const [isGreen, setIsGreen] = useState(false);
    return (
    <h1
        onClick={() => setIsGreen(!isGreen)}
        style={{ color: isGreen ? "green" : "black" }}
    >
        Click me and I will turn green
    </h1>
    );
};

export default StateComponent;
