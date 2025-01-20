import { FC } from 'react';

interface ButtonProps {
    action: (numberOfGoalsInput: number) => void;
}

// Q3 ; fct given by parent
// Q6-3 : receve props from parent 
export const Button: FC<ButtonProps> = ({ action }) => {
    // Q4 : initiate data via use Variable Server-Side
    let inputValue = 0;

    return (
        <div>
            <input
                type="number"
                defaultValue={inputValue}
                // q5: react class
                className={"table"}
                onChange={(e) => inputValue = Number(e.target.value)}
            />
            <button onClick={() => {
                // Q6-4: reCall callback function with value 
                action(inputValue);
            }}>
                Add goal
            </button>
        </div>
    );
}