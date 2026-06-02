import { useCallback, useEffect, useState } from "react";

import './GameBoard.css';
import "react-simple-keyboard/build/css/index.css";

import Char from "./Char";
import { getKeyboardDisplay, getKeyboardLayout } from "../helpers";

import KeyboardReact from "react-simple-keyboard";
import { useWordChecker } from "react-word-checker";
import { useReward } from "partycles";

function GameBoard({ answer }) {
    const MAX_ATTEMPTS = 6;

    const { 
        isLoading: isDictionaryLoading,
        wordExists: wordExists 
    } = useWordChecker("en");

    const [guesses, setGuesses] = useState(Array(MAX_ATTEMPTS).fill(''));
    const [colors, setColors] = useState(() => {
        let initialColors = [];
        for (let i = 0; i < MAX_ATTEMPTS; i++) {
            initialColors.push(Array(answer.length).fill(''))
        }
        return initialColors;
    })
    const [currentRow, setCurrentRow] = useState(0);
    const [message, setMessage] = useState("");

    const { reward } = useReward('gameboard', 'confetti', {
        particleCount: 60,
        spread: 80,
        startVelocity: 10,
        effects: { pulse : true }
    });
    
    const handleGuess = useCallback((currentGuess) => {
        if (!isDictionaryLoading) {
            let isValidWord = wordExists(currentGuess);
            if (isValidWord) {
                if (currentGuess === answer) {
                    setMessage(<p className="text-success">Congratulations! You won!</p>);
                    reward();
                } else {
                    setCurrentRow((row) => row+1);
                }
            }
            for (const [index, char] of Object.entries(currentGuess)) {
                let color = 'danger';
    
                if (isValidWord) {
                    if (char === answer[index]) {
                        color = 'success';
                    } else {
                        let indexFoundAtTheAnswer = answer.indexOf(char);
    
                        if (indexFoundAtTheAnswer > -1) {
                            color = (indexFoundAtTheAnswer === parseInt(index)) ? 'success' : 'warning';
                        }
                    }
                }
                
                
                setColors((prev) => {
                    const currentColors = [...prev];
                    currentColors[currentRow][index] = color;
                    return currentColors;
                })
            };
        }
    }, [answer, currentRow, isDictionaryLoading, reward, wordExists]);

    const handleKeyDown = useCallback((event) => {
        if (currentRow < MAX_ATTEMPTS && message === "") {
            const key = typeof(event) === 'string' ?
                event.toUpperCase() : event.key.toUpperCase()
    
            if (key === 'ENTER' || key === '{ENTER}') {
                setGuesses((prev) => {
                    const currentGuess = prev[currentRow];
                    if (currentGuess.length === answer.length) {
                        handleGuess(currentGuess);
                    }
    
                    return prev;
                })
            }
    
            if (/^[A-ZÀ-Ÿ]$/.test(key)) {
                setGuesses((prev) => {
                    const next = [...prev];
                    const currentGuess = next[currentRow];
    
                    if (currentGuess.length < answer.length) {
                        next[currentRow] = currentGuess + key;
                    }
    
                    return next;
                });
            }
    
            if (key === 'BACKSPACE' || key === '{BKSP}') {
                setGuesses((prev) => {
                    const next = [...prev];
                    next[currentRow] = next[currentRow].slice(0, -1);
    
                    return next;
                });
            }
        }
    },[answer, currentRow, handleGuess, message]);

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isDictionaryLoading, handleKeyDown]);

    let attemptRows = [];
    for (let attemptRowsI = 0; attemptRowsI < MAX_ATTEMPTS; attemptRowsI++) {
        let input = [];
        for (let i = 0; i < answer.length; i++) {
            input.push( <Char key={'char-'+attemptRowsI+'-'+i} letter={guesses[attemptRowsI][i]} color={colors[attemptRowsI][i]} /> );
        }
        attemptRows.push(<div key={'attempt-'+attemptRowsI} 
            className={ "attempt row mb-3" + (currentRow === attemptRowsI ? " selected" : "") }>
            {input}
        </div>)
    }
    
    return <div id="gameboard" className='keep-center mt-5'>
            <p className={"text-danger" + (currentRow < MAX_ATTEMPTS ? " d-none" : "")}>Sorry, you exceeded your attempts! Refresh the page and Try again!</p>
            {message}
            {attemptRows}
            <KeyboardReact onKeyReleased={button => handleKeyDown(button)} layout={getKeyboardLayout()} display={getKeyboardDisplay()} mergeDisplay="true" />
        </div>;
}

export default GameBoard;