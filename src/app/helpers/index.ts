export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const generateRandom = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};
