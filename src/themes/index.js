import Colors from './Colors';
import Metrics from './Metrics';
import Images from './Images';
import Typography from './Typography';

const dark = { ...Colors.dark, Images, ...Metrics, ...Typography };
const light = { ...Colors.light, Images, ...Metrics, ...Typography };

export const SUPPORTED_THEMES = {
  LIGHT: 0,
  DARK: 1,
};

const Themes = {
  dark,
  light,

  getTheme: (t = SUPPORTED_THEMES.LIGHT) => {
    return t === SUPPORTED_THEMES.LIGHT ? light : dark;
  },
};

export default Themes;
