import React, { useContext } from "react";

import classes from './Results.module.css';

import Card from "../UI/Card/Card";
import Calculator from "../store/calc-context";

const STRING_ARRAY = [
    'Binary (2)',
    'Ternary (3)',
    'Quarternary (4)',
    'Quinary (5)',
    'Senary (6)',
    'Septimal (7)',
    'Octal (8)',
    'Nonal (9)',
    'Decimal (10)',
    'Undecimal (11)',
    'Duodecimal (12)',
    'Tredecimal (13)',
    'Quadrodecimal (14)',
    'Quindecimal (15)',
    'Hexadecimal (16)',
]

const Results = (props) => {
    const ctx = useContext(Calculator);

    let numbersArray = [];

    for (let i = 2; i < 17; i++) {
        numbersArray.push({
            base: STRING_ARRAY[i-2],
            value: ctx.decimalNumber.toString(i)
        });
    }

    return (
        <Card className={classes.results}>
            <h2>Results</h2>
            <p className={classes.summary}>{ctx.convertedNumber}</p>
            <table>
                <thead>
                    <tr>
                        <th>Base</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {numbersArray.map((number) => (
                    <tr key={Math.random()}>
                        <td>{number.base}</td>
                        <td>{number.value}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    )
}

export default Results;