import { getClass } from '../../utils/helpers';

export default (theme, e) => {
  const generators: any = [
    ([modifier, size]) => ({
      [getClass('ml', modifier, e)]: {
        marginInlineStart: size,
      },
      [getClass('mr', modifier, e)]: {
        marginInlineEnd: size,
      },
      [getClass('mt', modifier, e)]: {
        marginTop: size,
      },
      [getClass('mb', modifier, e)]: {
        marginBottom: size,
      },
      [getClass('my', modifier, e)]: {
        marginTop: size,
        marginBottom: size,
      },
      [getClass('mx', modifier, e)]: {
        marginRight: size,
        marginLeft: size,
      },
      [getClass('m', modifier, e)]: {
        margin: size,
      },
    }),
  ];

  return generators.flatMap(generator =>
    Object.entries(theme('margin')).flatMap(generator)
  );
};
