import React, { useState } from "react"
import ContextTheme, {themes} from "./ContextTheme"

const Context = (props) => {
  const [themeState, setThemeState] = useState(themes.light)
  const changeTheme = () => {
    setThemeState(themeState === themes.dark ? themes.light : themes.dark)
  }
  return (
    <ContextTheme.Provider value={{ themeState, changeTheme }}>
      {props.children}
    </ContextTheme.Provider>
  )
}

export default Context