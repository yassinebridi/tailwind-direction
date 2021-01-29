import { getClass } from '../../utils/helpers';

export default (theme, e) => {
  const generators: any = [
    ([modifier, _size]) => {
      const size = _size === '0' ? '0px' : _size;
      return {
        [`${getClass(
          'space-x',
          modifier,
          e
        )} > :not([hidden]) ~ :not([hidden])`]: {
          '--tw-space-x-reverse': '0',
          marginInlineEnd: `calc(${size} * var(--tw-space-x-reverse))`,
          marginInlineStart: `calc(${size} * calc(1 - var(--tw-space-x-reverse)))`,
        },
        [`${getClass(
          'space-y',
          modifier,
          e
        )} > :not([hidden]) ~ :not([hidden])`]: {
          '--tw-space-y-reverse': '0',
          marginTop: `calc(${size} * calc(1 - var(--tw-space-y-reverse)))`,
          marginBottom: `calc(${size} * var(--tw-space-y-reverse))`,
        },
      };
    },
  ];

  const spaceReverse = {
    '.space-x-reverse > :not([hidden]) ~ :not([hidden])': {
      '--tw-space-x-reverse': '1',
    },
    '.space-y-reverse > :not([hidden]) ~ :not([hidden])': {
      '--tw-space-y-reverse': '1',
    },
  };

  return [
    ...generators.flatMap(generator =>
      Object.entries(theme('space')).flatMap(generator)
    ),
    spaceReverse,
  ];
};
