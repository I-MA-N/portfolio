import { useContext } from 'react';
import { ThemeContext } from '../App';

const ThemeBtn = () => {
    const [ isDark, setIsDark ] = useContext(ThemeContext);

    return (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20">
            <button 
                className="w-20 h-10 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow cursor-pointer"
                onClick={() => clickHandler(isDark, setIsDark)}
            >
                <div
                    className="w-10 h-10 relative rounded-full duration-500 text-yellow-600 dark:text-white bg-slate-100 dark:bg-slate-900 translate-x-full dark:-translate-x-2 p-1 cursor-pointer"
                >
                    {
                        isDark ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg>
                    }
                    
                </div>
            </button>
            <span className="theme-text">Change Theme Here !</span>
        </div>
    )
}

const clickHandler = (isDark, setIsDark) => {
    document.body.classList.toggle("dark");
    setIsDark(!isDark);
}

export default ThemeBtn;