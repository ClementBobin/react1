import { FC } from 'react';

interface ButtonProps {
    action: (numberOfGoalsInput: number) => void;
}

// Q3 ; fct given by parent
export const Button: FC<ButtonProps> = ({ action }) => {
    // Q4 : initiate data via use Variable Server-Side
    let inputValue = 0;

    return (
        <div>
            <input
                type="number"
                defaultValue={inputValue}
                // q6: react class
                className={"table"}
                onChange={(e) => inputValue = Number(e.target.value)}
            />
            <button onClick={() => {
                action(inputValue);
            }}>
                Add goal
            </button>
        </div>
    );
}