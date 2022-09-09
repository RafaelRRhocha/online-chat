import { createContext, FC, useEffect, useState } from "react";

interface AppContextProps {
  theme?: string
  changeTheme?: () => void
}

const AppContext = createContext<AppContextProps>({})

interface AppProviderProps {
  children: any
}

export const AppProvider: FC<AppProviderProps> = ({children}) => {
  const [getTheme, setGetTheme] = useState('')

  const changeTheme = () => {
    const newTheme = getTheme === '' ? 'dark' : '';
    setGetTheme(newTheme)
    localStorage.setItem('theme', newTheme);
  }

  useEffect(() => {
    const themeLocal = localStorage.getItem('theme');
    setGetTheme(themeLocal)
  }, [])

  const data = {
    theme: getTheme,
    changeTheme
  }

  return (
    <AppContext.Provider value={data}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext