import { getClass } from '../../utils/helpers';

export default (theme, e) => {
  const generators: any = [
    ([modifier, value]) => ({
      [`[dir="ltr"] ${getClass('rounded-r', modifier, e)}`]: {
        borderTopRightRadius: value,
        borderBottomRightRadius: value,
      },
      [`[dir="ltr"] ${getClass('rounded-l', modifier, e)}`]: {
        borderTopLeftRadius: value,
        borderBottomLeftRadius: value,
      },
      [`[dir="rtl"] ${getClass('rounded-r', modifier, e)}`]: {
        borderTopLeftRadius: value,
        borderBottomLeftRadius: value,
      },
      [`[dir="rtl"] ${getClass('rounded-l', modifier, e)}`]: {
        borderTopRightRadius: value,
        borderBottomRightRadius: value,
      },
      [`[dir="ltr"] ${getClass('rounded-tl', modifier, e)}`]: {
        borderTopLeftRadius: value,
      },
      [`[dir="ltr"] ${getClass('rounded-tr', modifier, e)}`]: {
        borderTopRightRadius: value,
      },
      [`[dir="ltr"] ${getClass('rounded-bl', modifier, e)}`]: {
        borderBottomLeftRadius: value,
      },
      [`[dir="ltr"] ${getClass('rounded-br', modifier, e)}`]: {
        borderBottomRightRadius: value,
      },
      [`[dir="rtl"] ${getClass('rounded-tl', modifier, e)}`]: {
        borderTopRightRadius: value,
      },
      [`[dir="rtl"] ${getClass('rounded-tr', modifier, e)}`]: {
        borderTopLeftRadius: value,
      },
      [`[dir="rtl"] ${getClass('rounded-bl', modifier, e)}`]: {
        borderBottomRightRadius: value,
      },
      [`[dir="rtl"] ${getClass('rounded-br', modifier, e)}`]: {
        borderBottomLeftRadius: value,
      },
      [`${getClass('rounded', modifier, e)}`]: {
        borderRadius: value,
      },
      [`${getClass('rounded-t', modifier, e)}`]: {
        borderTopLeftRadius: value,
        borderTopRightRadius: value,
      },
      [`${getClass('rounded-b', modifier, e)}`]: {
        borderBottomLeftRadius: value,
        borderBottomRightRadius: value,
      },
      '.rounded-none': {
        borderRadius: '0px',
      },
      '.rounded-full': {
        borderRadius: '9999px',
      },
    }),
  ];

  return generators.flatMap(generator =>
    Object.entries(theme('borderRadius')).flatMap(generator)
  );
};
