import borderRadiusUtility from './utilities/border-radius.utility';
import borderWidthUtility from './utilities/border-width.utility';
import clearUtility from './utilities/clear.utility';
import divideUtility from './utilities/divide-width.utility';
import floatUtility from './utilities/float.utility';
import insetUtility from './utilities/inset.utility';
import marginUtility from './utilities/margin.utility';
import paddingUtility from './utilities/padding.utility';
import spaceUtility from './utilities/space.utility';
import textAlignUtility from './utilities/text-align.utility';
import transformOriginUtility from './utilities/transform-origin.utility';

export const directionPlugin = ({ addUtilities, theme, variants, e }) => {
  addUtilities(paddingUtility(theme, e), variants('padding'));
  addUtilities(marginUtility(theme, e), variants('margin'));
  addUtilities(borderRadiusUtility(theme, e), variants('borderRadius'));
  addUtilities(borderWidthUtility(theme, e), variants('borderWidth'));
  addUtilities(spaceUtility(theme, e), variants('space'));
  addUtilities(divideUtility(theme, e), variants('divide'));
  addUtilities(insetUtility(theme, e), variants('inset'));
  addUtilities(clearUtility(), variants('clear'));
  addUtilities(floatUtility(), variants('float'));
  addUtilities(textAlignUtility(), variants('textAlign'));
  addUtilities(transformOriginUtility(), variants('transformOrigin'));
};
