export function detectColorScheme(): 'light' | 'dark' {
  let theme: 'light' | 'dark' = "light";    //default to light

  const localT = localStorage.getItem("theme")
  //local storage is used to override OS theme settings
  if (localT) {
    console.log({ localT })
    if (localT == "dark-mode") {
      theme = "dark";
    } else {
      theme = "light";
    }
  } else if (!window.matchMedia) {
    console.log('Match Media missing')
    //matchMedia method not supported
    theme = 'light';
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    //OS theme setting detected as dark
    theme = "dark";
  }

  return theme
}
export const changeTheme = (theme: 'light' | 'dark') => {
  if (!document || !document.body) return
  const themeClass = theme + '-mode'
  const oppThemeClass = (theme === 'light' ? 'dark' : 'light') + '-mode'
  document.body.classList.remove(oppThemeClass);
  document.body.classList.add(themeClass);
  localStorage.setItem('theme', theme + '-mode')
}


