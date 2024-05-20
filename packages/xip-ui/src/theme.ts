import { cssConverter, generateTheme, invertLightness, getShades, typeScale, shiftLCH } from 'themescura'

const base = {
  layout: {
    width: '1400px',
  },
  font: {
    family: '\"Inter\", sans-serif',
    heading: '\"Source Serif 4\", serif',
    mono: '\"Fira Mono\", monospace',
    size: typeScale({}),
  }
}

const vars = {
  light: {
    primary: 'oklch(55.5% 0.15 220)',
    background: 'oklch(90% 0.02 220)',
    text: 'oklch(25% 0.05 240)',
    heading: 'oklch(18% 0.05 280)',
  },
  dark: {
    primary: 'oklch(61.5% 0.15 220)',
    background: 'oklch(13% 0.04 220)',
    text: 'oklch(75% 0.05 240)',
    heading: 'oklch(95% 0.05 280)',
  },
}

type Base = typeof base
type Vars = typeof vars.light

const shade = (color: string, lightness: number, md: 'light' | 'dark') => getShades(
  color,
  [5, 5],
  { lightness: md === 'light' ? lightness : -lightness })


const baseFn = (b: Base) => ({
  ...b,
})
const modeFn = (m: Vars, md: 'light' | 'dark') => ({
  ...m,
  primary: shade(m.primary, 6, md),
  primaryOver: invertLightness(m.primary),
  secondary: shade(
    shiftLCH(m.primary, { hue: 120 }), 5, md),
  tertiary: shade(shiftLCH(m.primary, { hue: -120 }), 5, md),
  border: shiftLCH(m.text, { lightness: md === 'light' ? 60 : -50 }),
  primaryLight: shiftLCH(m.primary, { lightness: md === 'light' ? 10 : -10, chroma: -0.08 }),
  // Remove the first element
  surface: getShades(m.background, [0, 3], { lightness: md === 'light' ? 3 : 8 }).slice(1),
})


const palette = { id: 'xipProto', name: 'xip Proto', base, vars }

// Theme is a type with return types of baseFn and modeFn
const theme = generateTheme(palette, baseFn, modeFn)

const cssVal = cssConverter(theme)

// console.log(JSON.stringify({
//   palette,
//   theme,
//   cssVal
// }, null, 2))

export {
  palette,
  theme,
  cssVal
}
