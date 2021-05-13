import React, { useState } from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { light, dark } from '@apefinance-libs/uikit'

const CACHE_KEY = 'IS_DARK'

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeContextType>({ isDark: false, toggleTheme: () => null })

const ThemeContextProvider: React.FC = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // const isDarkUserSetting = localStorage.getItem(CACHE_KEY)
    // return isDarkUserSetting ? JSON.parse(isDarkUserSetting) : true
    return true;
  })

  const toggleTheme = () => {
    setIsDark((prevState: any) => {
      localStorage.setItem(CACHE_KEY, JSON.stringify(!prevState))
      return !prevState || true;
    })
  }

  const tempDark = { ...dark, 
    nav: {...dark.nav, background: "rgb(39, 38, 44)"},
    colors: {...dark.colors, text: "rgb(255, 136, 0)", background: '#100c18', card: '#000'},
    toggle: {...dark.toggle, handleBackground: "#100c18"},
    card: {...dark.card, background: "#000"},
    button: {...dark.button, primary: {...dark.button.primary, background: "#0056ac"}},
  }
  // console.log(dark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <SCThemeProvider theme={isDark ? tempDark : light}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }
