import { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (initalValue) => {
    const [mode, setMode] = useLocalStorage("mode", initalValue)

    useEffect(() => {

        if(mode) {
        const body = document.querySelector('body');
        body.classList.add('dark-mode');
        } 
        else {
            const body = document.querySelector('body');
            body.classList.remove('dark-mode');
        }
    }, [mode])

    // Let's just forward the value and the setter that were returned out of the useLocalStorage call. Return those two values in an array as well.
    return [mode, setMode];
}

export default useDarkMode;
