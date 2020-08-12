const fontWeight = {
  ExtraThin: 100,
  Thin: 300,
  Regular: 400,
  Medium: 500,
  SemiBold: 600,
  Bold: 700,
  Black: 800,
  ExtraBlack: 900,
};

const fontFamily = {
  Medium: {
    Type: "'Museo Sans 500'",
    Weight: fontWeight.Medium,
  },
  SemiBold: {
    Type: "'Museo Sans 700'",
    Weight: fontWeight.Bold,
  },
  Bold: {
    Type: "'Museo Sans 900'",
    Weight: fontWeight.ExtraBlack,
  },
};

const fontStyle = {
  normal: 'normal',
  italic: 'italic',
};

const textTransform = {
  uppercase: 'uppercase',
  lowercase: 'lowercase',
  capitalize: 'capitalize',
};

const fontSize = {
  h1: 20,
  // h2: 34,
  // h3: 30,
  // h4: 26,
  // h5: 20,
  // h6: 19,
  body: 14,
};

const lineHeight = {
  h1: 28,
  // h2: 34,
  // h3: 30,
  // h4: 26,
  // h5: 20,
  // h6: 19,
  body: 20,
};

export default {
  fontFamily,
  fontWeight,
  fontSize,
  fontStyle,
  lineHeight,
  textTransform,
};
