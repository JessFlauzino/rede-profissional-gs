import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeToggleBtn = ({theme, setTheme}) => {

    useEffect (() => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches;
        setTheme(theme || (prefersDarkMode ? 'dark' : 'light'))
    }, [])

    useEffect(() => {
        if(theme === 'dark'){
            document.documentElement.classList.add('dark')
        }
        else{
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme', theme)

    },[theme])

  return (
    <>
        <button>
        {theme === 'dark' ? (
            <img 
            onClick={() => setTheme('light')} 
            src={assets.sun_icon}
            className='w-8 h-8 p-1.5 border border-gray-500 rounded-full cursor-pointer bg-yellow-400'
            alt="Toggle Light Mode"
            />
        ) : (
            <img 
            onClick={() => setTheme('dark')} 
            src={assets.moon_icon}
            className='w-8 h-8 p-1.5 border border-gray-500 rounded-full cursor-pointer bg-gray-300 dark:bg-gray-700'
            alt="Toggle Dark Mode"
            />
        )}
        </button>
      
    </>
  )
}

export default ThemeToggleBtn
