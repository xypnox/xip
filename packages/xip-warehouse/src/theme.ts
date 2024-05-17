import { cssConverter, generateTheme, typeScale } from 'themescura'

const base = {
  layout: {
    width: '1400px',
  },
  font: {
    family: '\"Inter\", sans-serif',
    heading: '\"Source Serif 4\", serif',
    size: typeScale({}),
  }
}

const vars = {
  light: {
    primary: '#000',
    secondary: '#ff0080',
    background: '#eee',
    text: '#333',
    border: '#ccc',
    heading: '#000',
  },
  dark: {
    primary: '#fff',
    secondary: '#ff0080',
    background: '#111',
    text: '#aaa',
    border: '#444',
    heading: '#fff',
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

console.log(JSON.stringify({
  palette,
  theme,
  cssVal
}, null, 2))

export {
  palette,
  theme,
  cssVal
}
