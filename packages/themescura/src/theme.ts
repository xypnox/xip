import {
  // deepMerge,
  flattenObject,
  forObjectReplace
} from "./libobj";


const newKey = (keys: string[], value: any) =>
  [`--${keys.join("-")}`, value] as [string, any];

const joinVariables = (vars: Record<string, any>) =>
  Object.entries(vars).map(([k, v]) => `${k}: ${v};`).join('\n ')


/**
 * Input a nested object and prefix
 * Returns a new object with the keys replaced with css variables made from the prefix and the keys
 */
export const convertToVar =
  (theme: any, prefix = '') =>
    forObjectReplace(
      theme, (keys) => `var(--${prefix}${keys.join("-")})`
    )


/**
 * Flatten a nested object to a flat object,
 * The keys are replaced and joined with the newKey function
 * that gives a key starting with -- and joined with -
 */
export const flattenCss = (theme: any) => flattenObject(theme, newKey)


export interface Palette<BasePalette, ModePalette> {
  id: string;
  name: string;
  base: BasePalette;
  vars: {
    light: ModePalette;
    dark: ModePalette;
  }
}

export interface Theme<BaseVars, ModeVars> {
  id: string;
  name: string;
  base: BaseVars;
  vars: {
    light: ModeVars;
    dark: ModeVars;
  }
}

type Fn = (...args: any) => any

/**
 * Generate a theme from a palette
 * @param palette
 * @param baseFn
 * @param modeFn 
 * The baseFn and modeFn are functions convert their respective parts of the palette
 */
export const generateTheme =
  <
    BFn extends Fn,
    MFn extends Fn,
    T extends Theme<ReturnType<BFn>, ReturnType<MFn>>
  >(
    palette: Palette<Parameters<BFn>[0], Parameters<MFn>[0]>,
    baseFn: BFn,
    modeFn: MFn
  ): T => {
    return {
      id: palette.id,
      name: palette.name,
      base: baseFn(palette.base),
      vars: {
        light: modeFn(palette.vars.light),
        dark: modeFn(palette.vars.dark),
      }
    } as T
  }

/**
 * Final css should be
 * :root { // Base vars }
 * @media (prefers-color-scheme: dark) {
 *   :root { // Dark mode vars }
 * }
 * @media (prefers-color-scheme: light) {
 *   :root { // Light mode vars }
 * }
 * .dark-mode {  // This is added to the body tag }
 * .light-mode {  // This is added to the body tag }
 * The class is selected last to override preference
 * when it is set specifically by user
 */
export const cssConverter = <M extends Record<string, any>, P extends Record<string, any>, T extends Theme<M, P>>(theme: T) => {
  const baseCssVars = flattenObject(theme.base, newKey);
  const modeVars = {
    dark: flattenObject(theme.vars.dark, newKey),
    light: flattenObject(theme.vars.light, newKey),
  }

  const baseStyles = `:root { \n ${joinVariables(baseCssVars)} \n } \n`

  const modeVarsStyles = ['dark', 'light'].map(key => {
    const value = modeVars[key as keyof typeof modeVars]
    return `\n .${key}-mode { \n ${joinVariables(value)} \n } \n `
  }).join('\n')

  const mediaVarsStyles = ['dark', 'light'].map(key => {
    const value = modeVars[key as keyof typeof modeVars]
    return `\n @media (prefers-color-scheme: ${key}) { :root { \n ${joinVariables(value)} \n } } \n`
  }).join('\n')

  return `${baseStyles} ${mediaVarsStyles} ${modeVarsStyles}`
}

