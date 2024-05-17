import { detectColorScheme, changeTheme } from "./helper"

export const initTheme = () => {
  if (!document.body) return
  const theme = detectColorScheme();

  if (theme === 'dark') {
    changeTheme('dark')
  } else {
    changeTheme('light')
  }
}
