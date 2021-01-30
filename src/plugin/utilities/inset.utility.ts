import { getClass } from '../../utils/helpers';

export default (theme, e) => {
  const generators: any = [
    ([modifier, size]) => ({
      // top right bottom left
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
      [`${getClass('top', modifier, e)}`]: {
        top: size,
      },
      [`${getClass('bottom', modifier, e)}`]: {
        bottom: size,
      },
      // inset
      [`${getClass('inset', modifier, e)}`]: {
        top: size,
        left: size,
        right: size,
        bottom: size,
      },
      [`${getClass('inset-x', modifier, e)}`]: {
        left: size,
        right: size,
      },
      [`${getClass('inset-y', modifier, e)}`]: {
        top: size,
        bottom: size,
      },
    }),
  ];

  return generators.flatMap(generator =>
    Object.entries(theme('inset')).flatMap(generator)
  );
};
