import { cssConverter, generateTheme, typeScale } from 'themescura'

const base = {
  layout: {
    width: '1400px',
  },
  font: {
    family: 'system-ui, sans-serif',
    size: typeScale({}),
  }
}

const vars = {
  light: {
    primary: '#0070f3',
    secondary: '#ff0080',
    background: '#fff',
    text: '#000',
  },
  dark: {
    primary: '#3990ff',
    secondary: '#ff0080',
    background: '#000',
    text: '#fff',
  },
}

type Base = typeof base
type Vars = typeof vars.light

const baseFn = (b: Base) => ({ ...b, })
const modeFn = (m: Vars) => ({ ...m, })


const palette = { id: 'myTheme', name: 'My Theme', base, vars }

// Theme is a type with return types of baseFn and modeFn
const theme = generateTheme(palette, baseFn, modeFn)

const cssVal = cssConverter(theme)

export {
  palette,
  theme,
  cssVal
}
