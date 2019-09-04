import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {

    //Set up a state property called storedValue.
    const [storedValue, setStoredValue] = useState(() => {

        // To retrieve an item from localStorage, call localStorage.getItem('itemName')
        // If that item doesn't exist, it will return undefined
        const item = window.localStorage.getItem(key);   // <-- Get from local storage by key

        // Parse and return stored json or, if undefined, return initialValue
        return item ? JSON.parse(item) : initialValue; //The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string

        const setValue = value => {
            // Save State
            setStoredValue(value);
            //Save to local storage
            window.localStorage.setItem(key, JSON.stringify(value));
        };

    }); //end state prop

    //return storedValue from this hook in an array
    return [storedValue];
};