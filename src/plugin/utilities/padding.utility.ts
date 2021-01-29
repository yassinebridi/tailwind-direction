import { getClass } from '../../utils/helpers';

export default (theme, e) => {
  const generators: any = [
    ([modifier, size]) => ({
      [getClass('pl', modifier, e)]: {
        paddingInlineStart: size,
      },
      [getClass('pr', modifier, e)]: {
        paddingInlineEnd: size,
      },
      [getClass('pt', modifier, e)]: {
        paddingTop: size,
      },
      [getClass('pb', modifier, e)]: {
        paddingBottom: size,
      },
      [getClass('py', modifier, e)]: {
        paddingTop: size,
        paddingBottom: size,
      },
      [getClass('px', modifier, e)]: {
        paddingRight: size,
        paddingLeft: size,
      },
      [getClass('p', modifier, e)]: {
        padding: size,
      },
    }),
  ];

  return generators.flatMap(generator =>
    Object.entries(theme('padding')).flatMap(generator)
  );
};
