export const pipe = (...args) => (x) =>
  args.reduce((v, f) => f(v), x);

export const clone = (target: any, map: any = new WeakMap()): any => {
  if (typeof target === 'object') {
    const cloneTarget = Array.isArray(target) ? [] : {};
    if (map.get(target)) {
      return map.get(target);
    }
    map.set(target, cloneTarget);
    for (const key in target) {
      cloneTarget[key] = clone(target[key], map);
    }
    return cloneTarget;
  } else {
    return target;
  }
};

const utils = {
  pipe,
  clone,
};

export default utils;
