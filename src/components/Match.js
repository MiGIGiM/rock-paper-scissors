import React, { useState, useEffect } from 'react';

const results = [
    ['t', 'c', 'u', 'u', 'c'],
    ['u', 't', 'c', 'c', 'u'],
    ['c', 'u', 't', 'c', 'u'],
    ['c', 'u', 'u', 't', 'c'],
    ['u', 'c', 'c', 'u', 't'],
];

const choices = ['paper', 'rock', 'scissors', 'lizard', 'spock'];

function Match({
    score,
    option,
    setScore,
    setDecision,
}) {
    const [result, setResult] = useState('');
    const [computerOption, setComputerOption] = useState(option);
    const [counter, setCounter] = useState(1);

    const computerChoice = () => {
        const random = Math.floor(Math.random() * 3);
        setComputerOption(random);
    };

    const compare = () => {
        computerChoice();

        switch (results[computerOption][option]) {
            case 'u':
                setScore(score + 1);
                setResult('You Win!');
                break;
            case 'c':
                setScore(score - 1);
                setResult('You lose!');
                break;
            case 't':
                setResult('It\'s a tie!');
                setScore(score);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        const timer = counter > 0
            ? setInterval(() => {
                setCounter(counter - 0.5);
            }, 500)
            : compare();

        return () => {
            clearInterval(timer);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [counter, computerOption]);

    return (
        <div className="match">
            <div className={`match-choice ${counter === 0.5 ? 'slide-left' : ''}`}>
                <p>You Picked</p>
                <div className={
                    `icon icon-${choices[option]} 
                    ${results[computerOption][option] === 'u' ? `icon-${choices[option]}-win` : ''}
                    `
                }
                />
            </div>

            {
                counter === 0
                && (
                    <div className={`result ${counter === 0 ? 'fade-in' : ''}`}>
                        <p>{result}</p>
                        <button onClick={() => { setDecision(false); }} type="button">Play Again</button>
                    </div>
                )
            }

            <div className={`match-choice ${counter === 0.5 ? 'slide-right' : ''}`}>
                <p>The House Picked</p>
                {
                    counter === 0
                        ? (
                            <div className={
                                `icon icon-${choices[computerOption]}
                        ${results[computerOption][option] === 'c' ? `icon-${choices[computerOption]}-win` : ''}
                        `
                            }
                            />
                        )
                        : (
                        <div className="counter">
                            <p>🤔</p>
                        </div>
                        )
                }
            </div>
        </div>
    );
}

export default Match;
