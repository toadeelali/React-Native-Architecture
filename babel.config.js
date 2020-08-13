module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["babel-plugin-styled-components"],
    ["module:react-native-dotenv"],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@config': './src/config',
          '@constants': './src/constants',
          '@containers': './src/containers',
          '@services': './src/services',
          '@themes': './src/themes',
          '@utils': './src/utils',
        },
        extensions: ['.ios.js', '.android.js', '.js', '.json'],
      },
    ],
  ],
};
