import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

// Used via Metrics.baseMargin
const Metrics = {
  // MarginHorizontal: 10,
  // MarginVertical: 10,
  // section: 25,
  // baseMargin: 10,
  // doubleBaseMargin: 20,
  // smallMargin: 5,
  // doubleSection: 50,
  // horizontalLineHeight: 1,
  ScreenWidth: width < height ? width : height,
  ScreenHeight: width < height ? height : width,
  NavBarHeight: Platform.OS === 'ios' ? 64 : 54,
  // buttonRadius: 4,
  // borderRadius: 4,
  Icons: {
    tiny: 15,
    small: 24,
    medium: 26,
    large: 45,
    xl: 50,
    xxl: 72,
  },
  Images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200,
  },
  Space: {
    no:0,
    xs: 4,
    sm: 8,
    md: 16,
    large: 24,
    xl: 32,
    xxl: 48,
  },
  Radius: {
    regular: 4,
    large: 8,
  },
};

export default Metrics;
