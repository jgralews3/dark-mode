import useLocalStorage from './useLocalStorage';
import {useEffect} from 'react';

const initialValue = false

const useDarkMode = (key) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);
    useEffect (()=>{
        if (darkMode){
            document.querySelector("body").classList.add("dark-mode")
        } else {
            document.querySelector("body").classList.remove("dark-mode")
        }

    }, [darkMode]);

    return [darkMode, setDarkMode]
}

export default useDarkMode