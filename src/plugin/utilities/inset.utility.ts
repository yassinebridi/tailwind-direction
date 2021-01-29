import { getClass } from '../../utils/helpers';

export default (theme, e) => {
  const generators: any = [
    ([modifier, size]) => ({
      [`[dir="ltr"] ${getClass('left', modifier, e)}`]: {
        left: size,
      },
      [`[dir="ltr"] ${getClass('right', modifier, e)}`]: {
        right: size,
      },
      [`[dir="rtl"] ${getClass('left', modifier, e)}`]: {
        right: size,
      },
      [`[dir="rtl"] ${getClass('right', modifier, e)}`]: {
        left: size,
      },
    }),
  ];

  return generators.flatMap(generator =>
    Object.entries(theme('inset')).flatMap(generator)
  );
};
