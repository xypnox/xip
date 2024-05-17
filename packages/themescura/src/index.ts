// import { Palette, generateTheme } from './theme';

export * from './libobj';
export * from './utils';
export * from './theme';

// interface DefaultModePalette {
//   primary: string;
//   secondary: string;

//   background: string;
//   surface?: string;

//   text: string;
//   heading?: string;
// }

// interface DefaultBasePalette {
//   border?: {
//     width?: string;
//     style?: string;
//     radius?: string;
//   }
//   font?: {
//     family?: string;
//     size?: string;
//   }
// }

// interface DefaultPalette extends Palette<DefaultBasePalette, DefaultModePalette> { }

// export const themeBuilder = <P extends DefaultPalette,>(palette: P) => {
//   return {
//     theme: generateTheme(palette, (base: DefaultBasePalette) => ({
//       ...base,
//     }), (mode: DefaultModePalette) => ({
//       ...mode,
//     })),
//   }
// }
