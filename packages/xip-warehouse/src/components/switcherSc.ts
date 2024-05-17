import { detectColorScheme, changeTheme } from "./helper";

export const onModeSwitch = () => {
  if (!document || !document.body) return
  const body = document.body;
  if (body.classList.contains('dark-mode')) {
    // Remove 'dark-mode' add 
    changeTheme('light')
  } else if (body.classList.contains('light-mode')) {
    changeTheme('dark')
  } else {
    const preferredMode = detectColorScheme()
    // console.log({ preferredMode })
    if (preferredMode === 'dark') {
      changeTheme('light');
    } else {
      changeTheme('dark');
    }
  }
}
