export default () => ({
  '[dir="ltr"] .clear-left': { clear: 'left' },
  '[dir="ltr"] .clear-right': { clear: 'right' },
  '[dir="rtl"] .clear-left': { clear: 'right' },
  '[dir="rtl"] .clear-right': { clear: 'left' },
  '.clear-both': { clear: 'both' },
  '.clear-none': { clear: 'none' },
});
