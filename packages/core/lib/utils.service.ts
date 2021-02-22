export const pipe = (...args) => (x) =>
  args.reduce((v, f) => f(v), x);

const utils = {
  pipe,
};

export default utils;
