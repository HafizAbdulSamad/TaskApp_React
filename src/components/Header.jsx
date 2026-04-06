import { useEffect, useState } from 'react';
import logo from '../assets/react.svg';

export default function Header() {
    const [theme, setTheme] = useState(()=>{
        try {
            return JSON.parse(localStorage.getItem("theme")) || "gTwo";
        } catch (e) {
            console.error("Error parsing theme from localStorage" , e);
            return "gTwo";
        }
    });
    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme));
        document.documentElement.removeAttribute("class");
        document.documentElement.classList.add(theme);
    });
    return (
        <>
            <header>
                <div className="logo">
                    <img src={logo} alt="App Logo" />
                    <span>TaskApp</span>

                </div>
                <div className="themeSelector">
                    <span className={theme === "light" ? "light activeTheme" : "light"}
                        onClick={() => setTheme("light")}
                    ></span>
                    <span className={theme === "medium" ? "light activeTheme" : "medium"} onClick={() => setTheme("medium")}></span>
                    <span className={theme === "dark" ? "light activeTheme" : "dark"} onClick={() => setTheme("dark")}></span>
                    <span className={theme === "gOne" ? "light activeTheme" : "gOne"} onClick={() => setTheme("gOne")}></span>
                    <span className={theme === "gTwo" ? "light activeTheme" : "gTwo"} onClick={() => setTheme("gTwo")}></span>
                    <span className={theme === "gThree" ? "light activeTheme" : "gThree"} onClick={() => setTheme("gThree")}></span>
                </div>
            </header>
        </>
    );
}