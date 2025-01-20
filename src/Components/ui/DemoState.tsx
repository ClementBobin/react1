import {useState} from "react";
import { Button } from "./Button.tsx"

export function DemoState() {
    // Q4: initiate data via use State Client-Side
    const [numberOfGoals, setNumberOfGoals] = useState(0);

    function addGoal(numberOfGoalsInput: number) {
        setNumberOfGoals(numberOfGoals + numberOfGoalsInput);
    }

    return (
        <>
            // Q5: True
            <h1>State demo</h1>
            <Button action={addGoal}/>
            <div>Number of goals: {numberOfGoals}</div>
        </>
    );
}
