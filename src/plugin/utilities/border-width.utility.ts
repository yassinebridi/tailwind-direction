import { getClass } from '../../utils/helpers';

export default (theme, e) => {
  const generators: any = [
    ([modifier, value]) => ({
      [`${getClass('border-r', modifier, e)}`]: {
        borderInlineEndWidth: value,
      },
      [`${getClass('border-l', modifier, e)}`]: {
        borderInlineStartWidth: value,
      },
      [`${getClass('border-t', modifier, e)}`]: {
        borderTopWidth: value,
      },
      [`${getClass('border-b', modifier, e)}`]: {
        borderBottomWidth: value,
      },
      [`${getClass('border', modifier, e)}`]: {
        borderWidth: value,
      },
    }),
  ];

  return generators.flatMap(generator =>
    Object.entries(theme('borderWidth')).flatMap(generator)
  );
};
