import { getClass } from '../../utils/helpers';

export default (theme, e) => {
  const generators: any = [
    ([modifier, _size]) => {
      const size = _size === '0' ? '0px' : _size;
      return {
        [`${getClass(
          'divide-x',
          modifier,
          e
        )} > :not([hidden]) ~ :not([hidden])`]: {
          '--tw-divide-x-reverse': '0',
          borderInlineEndWidth: `calc(${size} * var(--tw-divide-x-reverse))`,
          borderInlineStartWidth: `calc(${size} * calc(1 - var(--tw-divide-x-reverse)))`,
        },
        [`${getClass(
          'divide-y',
          modifier,
          e
        )} > :not([hidden]) ~ :not([hidden])`]: {
          '--tw-divide-y-reverse': '0',
          borderTopWidth: `calc(${size} * calc(1 - var(--tw-divide-y-reverse)))`,
          borderBottomWidth: `calc(${size} * var(--tw-divide-y-reverse))`,
        },
      };
    },
  ];

  const divideReverse = {
    '.divide-x-reverse > :not([hidden]) ~ :not([hidden])': {
      '--tw-divide-x-reverse': '1',
    },
    '.divide-y-reverse > :not([hidden]) ~ :not([hidden])': {
      '--tw-divide-y-reverse': '1',
    },
  };

  return [
    ...generators.flatMap(generator =>
      Object.entries(theme('divideWidth')).flatMap(generator)
    ),
    divideReverse,
  ];
};
