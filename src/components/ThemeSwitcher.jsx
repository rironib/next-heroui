"use client";

import {useTheme} from "next-themes";
import {RiMoonFill, RiSunFill} from "react-icons/ri";

export const ThemeSwitcher = () => {
    const {theme, setTheme} = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <button onClick={toggleTheme} aria-label="Theme Switcher" className="md:text-xl">
            {theme === "light" ? <RiSunFill/> : <RiMoonFill/>}
        </button>
    );
};