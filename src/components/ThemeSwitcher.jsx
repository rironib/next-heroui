"use client";

import {useTheme} from "next-themes";
import {MoonIcon, SunIcon} from "@/components/icons";
import {Button} from "@heroui/button";

export const ThemeSwitcher = () => {
    const {theme, setTheme} = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <Button onClick={toggleTheme} isIconOnly aria-label="Theme Switcher" color="secondary" variant="faded"
                size="lg">
            {theme === "light" ? (
                <SunIcon className="text-yellow-600"/>
            ) : (
                <MoonIcon className="text-gray-300"/>
            )}
        </Button>


    )
        ;
};
