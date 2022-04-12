import React, {useState} from "react";

export const useToggle = () => {
    const [isToggle, setIsToggle] = useState(true);

    const toggleToggle = () => {
        setIsToggle(!isToggle)
    }

    return {toggleToggle, isToggle};

}