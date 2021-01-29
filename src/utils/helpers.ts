export const getClass = (classPrefix, key, e) => {
  if (key === 'default') {
    return `.${e(classPrefix)}`;
  }

  if (key === '-') {
    return `.${e(`-${classPrefix}`)}`;
  }

  if (key.startsWith('-')) {
    return `.${e(`-${classPrefix}${key}`)}`;
  }

  return `.${e(`${classPrefix}-${key}`)}`;
};
