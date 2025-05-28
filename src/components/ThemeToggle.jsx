import React, { useEffect } from 'react';
import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { cn } from '../lib/utils'; // Importing the cn function for className concatenation

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if(storedTheme == "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, [])

    const toggleTheme = () => {
        if (isDarkMode) { 
            //just removing dark mode from tailwindcss (index.css)
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            //adding dark mode from tailwindcss (index.css)
            document.documentElement.classList.add("dark");
            //to remeber the setting when we reload the page, we can use localStorage
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);

        }
    }

    //but to actually change the theme, we need to add Taillwindcss (created by us) from index.css [Idark modeI] here ro toglle all

    return (
        <button 
            onClick={toggleTheme}
            className={cn(
                "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300", "focus:outline-hidden"
            )}
            >
            {/* now atlast to move the button to the position */}


            {isDarkMode ? <Sun className='h-6  w-6 text-yellow-300'/> : <Moon className='h-6  w-6 text-blue-900' />}
        </button>
    )
}