import { calculateTypeScale } from "./utopia";

export const defaultTypeScale = {
  minWidth: 320,
  maxWidth: 1400,
  minFontSize: 16,
  maxFontSize: 21,
  minTypeScale: 1.2,
  maxTypeScale: 1.3,
  negativeSteps: 2,
  positiveSteps: 5,
};

export const typeScale = (params: Partial<typeof defaultTypeScale>) => {
  const scale = calculateTypeScale({
    ...defaultTypeScale,
    ...params,
  });

  return scale.reduce(
    (acc, size) => ({
      ...acc,
      [size.step]: size.clamp,
    }),
    {} as Record<string, string>,
  );
};
