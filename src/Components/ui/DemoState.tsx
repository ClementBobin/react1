import {useState} from "react";
import { Button } from "./Button.tsx"

export function DemoState() {
    const [numberOfGoals, setNumberOfGoals] = useState(0);

    function addGoal(numberOfGoalsInput: number) {
        setNumberOfGoals(numberOfGoals + numberOfGoalsInput);
    }

    return (
        <>
            <h1>State demo</h1>
            <Button action={addGoal}/>
            <div>Number of goals: {numberOfGoals}</div>
        </>
    );
}
