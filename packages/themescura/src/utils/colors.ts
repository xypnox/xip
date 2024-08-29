type Color = string;

// color is oklch(l% c h)
const getLCH = (color: Color) => {
  const val = {
    l: 0,
    c: 0,
    h: 0,
  };

  color.split(" ").forEach((v, i) => {
    if (i === 0) {
      val.l = parseFloat(v.replace("%", "").replace("oklch(", ""));
    }
    if (i === 1) val.c = parseFloat(v);
    else val.h = parseFloat(v.replace(")", ""));
  });
  // console.log({ color, val })
  return val;
};

export const invertLightness = (color: Color) => {
  const c = getLCH(color);
  return `oklch(${100 - c.l}% ${c.c} ${c.h})`;
};

interface Shift {
  chroma?: number;
  lightness?: number;
  hue?: number;
}

export const shiftLCH = (color: Color, shift: Shift) => {
  const c = getLCH(color);
  const shifted = {
    lightness:
      shift.lightness !== undefined ? (c.l + shift.lightness).toFixed(2) : c.l,
    chroma: shift.chroma !== undefined ? (c.c + shift.chroma).toFixed(2) : c.c,
    hue: shift.hue !== undefined ? (c.h + shift.hue).toFixed(2) : c.h,
  };
  return `oklch(${shifted.lightness}% ${shifted.chroma} ${shifted.hue})`;
};

export const getShades = (
  color: Color,
  steps = [2, 2],
  shift: {
    chroma?: number;
    lightness?: number;
    hue?: number;
  } = {
    lightness: 5,
  },
) => {
  const totalSteps = steps.reduce((acc, step) => acc + step, 0);
  const shades = Array.from({ length: totalSteps })
    .map((_, i) => i)
    .reduce((acc, _step, i) => {
      const isNegative = i < steps[0];
      const idx = isNegative ? i - steps[0] : i - steps[0] + 1;
      const shifted = {
        lightness:
          shift.lightness !== undefined
            ? (isNegative ? shift.lightness : shift.lightness) * idx
            : undefined,
        chroma:
          shift.chroma !== undefined
            ? (isNegative ? shift.chroma : shift.chroma) * idx
            : undefined,
        hue:
          shift.hue !== undefined
            ? (isNegative ? shift.hue : shift.hue) * idx
            : undefined,
      };
      return [...acc, shiftLCH(color, shifted)];
    }, [] as string[]);

  // insert the original color in the middle
  shades.splice(steps[0], 0, color);

  // console.log({ shades })
  return shades;
};
