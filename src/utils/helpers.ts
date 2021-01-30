export const getClass = (classPrefix, key, e) => {
  function asClass(name) {
    return `.${e(name)}`;
  }

  if (key === 'DEFAULT') {
    return asClass(classPrefix);
  }

  if (key === '-') {
    return asClass(`-${classPrefix}`);
  }

  if (key.startsWith('-')) {
    return asClass(`-${classPrefix}${key}`);
  }

  return asClass(`${classPrefix}-${key}`);
};
