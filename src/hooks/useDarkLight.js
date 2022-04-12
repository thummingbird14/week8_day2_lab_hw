import React, {useState} from "react";

export const useDarkLight = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }

    return {toggleDarkMode, isDarkMode};

}