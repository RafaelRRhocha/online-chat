import { createContext, FC, useState } from "react";

type Theme = 'dark' | ''

interface AppContextProps {
  theme?: Theme
  changeTheme?: () => void
}

const AppContext = createContext<AppContextProps>({})

interface AppProviderProps {
  children: any
}

export const AppProvider: FC<AppProviderProps> = ({children}) => {
  const [getTheme, setGetTheme] = useState<Theme>('')

  const changeTheme = () => {
    setGetTheme(getTheme === '' ? 'dark' : '')
  }

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